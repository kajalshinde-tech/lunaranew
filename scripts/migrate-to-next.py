from html.parser import HTMLParser
from pathlib import Path
import re,json,shutil
root=Path('.')
class Node:
 def __init__(self,tag='',attrs=None): self.tag,self.attrs,self.children=tag,dict(attrs or []),[]
class Parser(HTMLParser):
 def __init__(self): super().__init__(convert_charrefs=True);self.root=Node();self.stack=[self.root]
 def handle_starttag(self,tag,attrs):
  n=Node(tag,attrs);self.stack[-1].children.append(n)
  if tag not in void:self.stack.append(n)
 def handle_startendtag(self,tag,attrs): self.handle_starttag(tag,attrs); self.handle_endtag(tag) if tag not in void else None
 def handle_endtag(self,tag):
  for i in range(len(self.stack)-1,0,-1):
   if self.stack[i].tag==tag:self.stack=self.stack[:i];break
 def handle_data(self,data):self.stack[-1].children.append(data)
void={'area','base','br','col','embed','hr','img','input','link','meta','param','source','track','wbr'}
def find(n,tag):
 if not isinstance(n,Node):return None
 if n.tag==tag:return n
 for c in n.children:
  v=find(c,tag)
  if v:return v
routes={p.name:('/' if p.stem=='index' else '/'+p.stem) for p in root.glob('*.html') if p.stem!='ppt'}
def url(v):
 for old,new in routes.items():
  if v==old or v.startswith(old+'#'):return new+v[len(old):]
 if v.startswith(('images/','css/','js/','fonts/')) or re.match(r'^[\w-]+\.png$',v):return '/'+v
 return v
mapping={'class':'className','for':'htmlFor','tabindex':'tabIndex','maxlength':'maxLength','minlength':'minLength','readonly':'readOnly','autofocus':'autoFocus','autocomplete':'autoComplete','colspan':'colSpan','rowspan':'rowSpan','crossorigin':'crossOrigin','fetchpriority':'fetchPriority','stroke-width':'strokeWidth','stroke-linecap':'strokeLinecap','stroke-linejoin':'strokeLinejoin','fill-rule':'fillRule','clip-rule':'clipRule','frameborder':'frameBorder','allowfullscreen':'allowFullScreen','viewbox':'viewBox'}
bools={'required','disabled','multiple','hidden','open','controls','loop','muted','readOnly','autoFocus','allowFullScreen'}
def render(n):
 if isinstance(n,str):return '{'+json.dumps(n,ensure_ascii=False)+'}' if n.strip() else '\n'
 if n.tag in ('script','style'):return ''
 if n.attrs.get('id') in ('header','footer') or n.tag=='footer':return ''
 if n.tag=='form' and n.attrs.get('id')=='contact-form':return '<ContactForm />'
 attrs=[];tag=n.tag
 if tag=='a' and n.attrs.get('href','').endswith('.html'):tag='Link'
 elif tag=='a' and any(n.attrs.get('href','').startswith(x+'#') for x in routes):tag='Link'
 for k,v in n.attrs.items():
  if k.startswith('on'):continue
  if k=='selected':continue
  k=mapping.get(k,k)
  if k=='style':
   styles={}
   for part in (v or '').split(';'):
    if ':' not in part:continue
    key,value=part.split(':',1);key=key.strip()
    if not key.startswith('--'):key=re.sub(r'-([a-z])',lambda m:m[1].upper(),key)
    styles[key]=value.strip()
   attrs.append('style={'+json.dumps(styles)+'}');continue
  if k in ('src','href','poster'):v=url(v or '')
  if k in bools:attrs.append(k);continue
  if k=='value' and n.tag in ('select','input','textarea'):k='defaultValue'
  attrs.append(k+'='+json.dumps(v or '',ensure_ascii=False))
 opening='<'+tag+(' '+' '.join(attrs) if attrs else '')
 if n.tag in void:return opening+' />'
 return opening+'>'+''.join(render(c) for c in n.children)+'</'+tag+'>'
(root/'pages').mkdir(exist_ok=True);(root/'components/react').mkdir(exist_ok=True);(root/'public').mkdir(exist_ok=True)
for directory in ('images','fonts'):
 shutil.copytree(root/directory,root/'public'/directory,dirs_exist_ok=True)
for f in root.glob('*.png'):shutil.copy2(f,root/'public'/f.name)
for f in root.glob('*.html'):
 if f.stem=='ppt':continue
 p=Parser();p.feed(f.read_text(encoding='utf-8-sig'));body=find(p.root,'body');title=find(p.root,'title');description=''
 def walk(n):
  if isinstance(n,Node):
   yield n
   for c in n.children:yield from walk(c)
 for n in walk(p.root):
  if n.tag=='meta' and n.attrs.get('name')=='description':description=n.attrs.get('content','')
 text=''.join(title.children) if title else 'Lunara'
 output="import Head from 'next/head';\nimport Link from 'next/link';\n"
 if f.stem=='contact':output+="import ContactForm from '../components/react/ContactForm';\n"
 output+='\nexport default function Page() {\nreturn <><Head><title>{'+json.dumps(text,ensure_ascii=False)+'}</title><meta name="description" content='+json.dumps(description,ensure_ascii=False)+' /></Head>\n'
 output+=''.join(render(c) for c in body.children)+'\n</>;\n}\n'
 (root/'pages'/('index.js' if f.stem=='index' else f.stem+'.js')).write_text(output,encoding='utf-8')
# Keep the original presentation export available separately.
shutil.copy2(root/'ppt.html',root/'public/ppt.html')
# Preserve legacy styling without allowing it to override the redesigned pages.
legacy=(root/'css/style.css').read_text(encoding='utf-8-sig')+'\n'+(root/'css/minimal-refresh.css').read_text(encoding='utf-8-sig')
legacy=legacy.replace('../images/','/images/').replace('../fonts/','/fonts/')
(root/'css/legacy.css').write_text('@scope (.legacy-page) {\n'+legacy+'\n}\n.legacy-page .animate-on-scroll {opacity:1;transform:none;}\n',encoding='utf-8')
