const _0x1fe3=['message','Submit\x20OK\x0a','error','git\x20commit\x20-m\x20\x22CP\x20commiteado\x20por\x20','stderr:\x20','prompt-sync','Password:','status','statusText','\x20master','error:\x20','log','FTM4\x20-\x2004-Authentication','toLowerCase','exit','Usuario\x20de\x20github:','hide','catch','then','\x20a\x20las\x20','@github.com/','application/json','git\x20push\x20https://','https://proxy.soyhenry.com:3000/submit','node-fetch','git\x20config\x20--get\x20remote.origin.url','post','Falló\x20el\x20submit\x0a'];(function(_0x49bf5b,_0x1fe36a){const _0x44b26b=function(_0x5dd37b){while(--_0x5dd37b){_0x49bf5b['push'](_0x49bf5b['shift']());}};_0x44b26b(++_0x1fe36a);}(_0x1fe3,0xd3));const _0x44b2=function(_0x49bf5b,_0x1fe36a){_0x49bf5b=_0x49bf5b-0x0;let _0x44b26b=_0x1fe3[_0x49bf5b];return _0x44b26b;};const _0x3bb0af=_0x44b2,{exec}=require('child_process'),fetch=require(_0x3bb0af('0x9'));var prompt=require(_0x3bb0af('0x12'))();const fs=require('fs');function ejecutar(_0x5dd37b){return new Promise((_0x410084,_0x5de28e)=>{exec(_0x5dd37b,(_0x448e8b,_0x3cf1e7,_0x48af97)=>{const _0x4bd06f=_0x44b2;if(_0x448e8b)return _0x5de28e(_0x4bd06f('0x17')+_0x448e8b[_0x4bd06f('0xd')]);if(_0x48af97)return _0x410084(_0x4bd06f('0x11')+_0x48af97);_0x410084(_0x3cf1e7);});});}(async function iniciarProceso(){const _0x13f705=_0x3bb0af,_0x5049e4=prompt('Estas\x20seguro\x20que\x20deseas\x20submitear\x20este\x20resultado?\x20(S/n)\x20')[_0x13f705('0x1a')]();if(_0x5049e4!=='s')return process[_0x13f705('0x1b')](0x0);const _0x1b246a=prompt(_0x13f705('0x0'))[_0x13f705('0x1a')](),_0x359c7a=prompt[_0x13f705('0x1')](_0x13f705('0x13'));let _0x163f9a;try{const _0x5b24eb=await ejecutar(_0x13f705('0xa'));_0x163f9a=_0x5b24eb['trim']()['split']('/')['pop'](),await ejecutar('git\x20add\x20.'),await ejecutar(_0x13f705('0x10')+_0x1b246a+_0x13f705('0x4')+Date['now']()+'\x22'),await ejecutar(_0x13f705('0x7')+_0x1b246a+':'+_0x359c7a+_0x13f705('0x5')+_0x1b246a+'/'+_0x163f9a+_0x13f705('0x16'));}catch(_0x3ebef6){return console[_0x13f705('0xf')](_0x3ebef6),process[_0x13f705('0x1b')](0x0);}fetch(_0x13f705('0x8'),{'method':_0x13f705('0xb'),'headers':{'Content-Type':_0x13f705('0x6')},'body':JSON['stringify']({'github':_0x1b246a,'passed':0x0,'total':0x0,'repo':_0x13f705('0x19')})})[_0x13f705('0x3')](function(_0x56f24b){const _0x2cdfc6=_0x13f705;if(_0x56f24b[_0x2cdfc6('0x14')]!==0xc8)throw new Error(_0x56f24b[_0x2cdfc6('0x15')]);return console[_0x2cdfc6('0x18')](_0x2cdfc6('0xe')),process[_0x2cdfc6('0x1b')](0x0);})[_0x13f705('0x2')](function(_0x48d218){const _0x47d691=_0x13f705;return console['error'](_0x48d218),console[_0x47d691('0x18')](_0x47d691('0xc')),process[_0x47d691('0x1b')](0x1);});}());
