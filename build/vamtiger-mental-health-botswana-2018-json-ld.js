!function(){"use strict";var t,n;!function(t){t.jsonLd="application/ld+json",t.json="application/json"}(t||(t={})),function(t){t.svgCaption="https://unpkg.com/vamtiger-arting-health-logo-json-ld@latest"}(n||(n={}));const a="https://unpkg.com/vamtiger-mental-health-botswana-json-ld@latest";var e=[{"@context":"http://schema.org/","@type":"VisualArtwork",name:"Mental Health",description:"Depression",datePublished:"05 June 2019",image:"https://unpkg.com/vamtiger-mental-health-botswana-json-ld@latest/vamtiger-mental-health-botswana-2018-json-ld.jpg",founder:[{"@type":"Person",name:"Abraham Mamela",disambiguatingDescription:"Creative Concept for Arting Health, founder and CEO of Infers Group",hasOccupation:{"@type":"Occupation",name:"Science Communicator, Project Lead for Arting Health and CEO of Infers Group"}}],creator:[{"@type":"Organization",name:"Infers Group",url:"http://artinghealth.infersgroup.com",email:"info(at)infersgroup.com"}],sponsor:{"@type":"Organization",name:"Welcome",url:"https://wellcome.ac.uk"}}];const{svgCaption:o}=n;var r={svgCaption:o};const{stringify:s}=JSON;const i=e.map(n=>({url:a,type:t.jsonLd,data:n})),p={url:a,type:t.json,data:r};[...i,p].forEach(function({type:t,url:n,data:a}){const{head:e}=document,o=document.createElement("script"),r=Object.keys(a).length&&a;o.type=t,o.dataset.jsonLd=n,r&&(o.innerHTML=s(r).trim()),o.innerHTML&&e.appendChild(o)})}();
//# sourceMappingURL=vamtiger-mental-health-botswana-2018-json-ld.js.map
