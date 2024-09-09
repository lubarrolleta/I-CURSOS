export class AddScript {
    #Scripts = [
      //
      {
        name: "jsBoostrappopper", //DEBE IR PRIMERO EN QUE JSBOOSTRAP
        to: "body",
        tag: "script",
  
        property: {
          id: "jsBoostrappopper",
          src: "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js",
          integrity:
            "sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r",
          crossorigin: "anonymous",
        },
        active: false,
        priority: true,
      },
      {
        name: "SimpleCrypto", //libreria de cryptografia
        to: "body",
        tag: "script",
  
        property: {
          id: "SimpleCrypto",
          src: "https://cdn.jsdelivr.net/npm/simple-crypto-js@2.5.0/dist/SimpleCrypto.min.js",
        },
        active: false,
        priority: true,
      },
      {
          name: "GoogleApis", //libreria de GoogleApis
          to: "body",
          tag: "script",
    
          property: {
            id: "GoogleApis",
            // src: "https://apis.google.com/js/api.js",
            src:"https://apis.google.com/js/api.js",
            // src: "https://unpkg.com/googleapis@118.0.0/build/src/index.js",
            // type:"module",
            // async:true,
            // defer :true,
          },
          active: false,
          priority: true,
        },
      {
        name: "html2pdf",
        to: "head",
        tag: "script",
        property: {
          id: "html2pdf",
  
          src: "https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js",
          integrity:
            "sha512-GsLlZN/3F2ErC5ifS5QtgpiJtWd43JWSuIgh7mbzZ8zBps+dvLusV+eNQATqgA/HdeKFVgA5v3S/cIrLF7QnIg==",
          crossorigin: "anonymous",
          referrerpolicy: "no-referrer",
        },
        active: false,
        priority: false,
      },
      {
        name: "jsPDF",
        to: "body",
        tag: "script",
        property: {
          src: "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js",
          type: "module",
        },
        active: false,
        priority: false,
      },
      {
        name: "html2canvas",
        to: "body",
        tag: "script",
        property: {
          src: "https://html2canvas.hertzen.com/dist/html2canvas.min.js",
        },
        active: false,
        priority: false,
      },
      {
        name: "jsBoostrap",
        to: "body",
        tag: "script",
  
        property: {
          src: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.min.js",
          integrity:
            "sha384-BBtl+eGJRgqQAUMxJ7pMwbEyER4l1g+O15P+16Ep7Q9Q+zqX6gSbd85u4mG4QzX+",
          crossorigin: "anonymous",
        },
        active: false,
        priority: false,
      },
      {
        name: "cssBoostrap",
        to: "head",
        tag: "link",
  
        property: {
          href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css",
          rel: "stylesheet",
          integrity:
            "sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN",
          crossorigin: "anonymous",
        },
        active: true,
        priority: false,
      },
      {
        name: "bootstrap-icons",
        to: "head",
        tag: "link",
  
        property: {
          href: "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css",
          rel: "stylesheet",
        },
        active: true,
        priority: false,
      },
      {
        name: "HTMX.org",
        to: "body",
        tag: "script",
  
        property: {
          src: "https://unpkg.com/htmx.org@1.9.6",
          integrity:
            "sha384-FhXw7b6AlE/jyjlZH5iHa/tTe9EpJ1Y55RjcgPbjeWMskSxZt1v9qkxLJWNJaGni",
          crossorigin: "anonymous",
        },
        active: false,
        priority: false,
      },
      {
          name: "numeral",
          to: "body",
          tag: "script",
    
          property: {
            src: "//cdnjs.cloudflare.com/ajax/libs/numeral.js/2.0.6/numeral.min.js",
          //   integrity:
          //     "sha384-FhXw7b6AlE/jyjlZH5iHa/tTe9EpJ1Y55RjcgPbjeWMskSxZt1v9qkxLJWNJaGni",
          //   crossorigin: "anonymous",
          },
          active: true,
          priority: false,
        },
      {
        name: "Custom.css",
        to: "head",
        tag: "style",
  
        property: {},
        innerHTML: `
              :root{
                --bs-primary:linear-gradient(74.74deg, #F1E499 -1.97%, #F2DD91 -1.66%, #F6C073 -0.2%, #F9A95A 1.4%, #FC9647 3.19%, #FE8A39 5.26%, #FF8231 7.87%, #FF802F 12.73%, #FA713A 16.11%, #F2584C 22.95%, #ED4957 29.2%, #EB445B 34.31%, #EB465E 38.75%, #EA4C69 42.6%, #E8577B 46.23%, #E56694 49.71%, #E279B4 53.09%, #E27AB5 53.19%, #9C7ADE 59.86%);
                --bs-btn-active-border-color :#fff; 
                --color-spinner : #ff1865;
                --bs-btn-bg : #fff !important;
                --primary : linear-gradient(74.74deg, #F1E499 -1.97%, #F2DD91 -1.66%, #F6C073 -0.2%, #F9A95A 1.4%, #FC9647 3.19%, #FE8A39 5.26%, #FF8231 7.87%, #FF802F 12.73%, #FA713A 16.11%, #F2584C 22.95%, #ED4957 29.2%, #EB445B 34.31%, #EB465E 38.75%, #EA4C69 42.6%, #E8577B 46.23%, #E56694 49.71%, #E279B4 53.09%, #E27AB5 53.19%, #9C7ADE 59.86%);;
              }
              .form-control:focus,.btn:not(:disabled):not(.disabled):active:focus,select:focus {
    
                box-shadow: 0 0 0 0.25rem #ff18651f !important;
                border-color:#fff !important;
              }
              .titleOffCanvas{
                background :linear-gradient(74.74deg, #F1E499 -1.97%, #F2DD91 -1.66%, #F6C073 -0.2%, #F9A95A 1.4%, #FC9647 3.19%, #FE8A39 5.26%, #FF8231 7.87%, #FF802F 12.73%, #FA713A 16.11%, #F2584C 22.95%, #ED4957 29.2%, #EB445B 34.31%, #EB465E 38.75%, #EA4C69 42.6%, #E8577B 46.23%, #E56694 49.71%, #E279B4 53.09%, #E27AB5 53.19%, #9C7ADE 59.86%) !important;
                background-clip: text !important;
                -webkit-background-clip: text;
                color: transparent;
                font-size: x-large;
                border-color : linear-gradient(74.74deg, #F1E499 -1.97%, #F2DD91 -1.66%, #F6C073 -0.2%, #F9A95A 1.4%, #FC9647 3.19%, #FE8A39 5.26%, #FF8231 7.87%, #FF802F 12.73%, #FA713A 16.11%, #F2584C 22.95%, #ED4957 29.2%, #EB445B 34.31%, #EB465E 38.75%, #EA4C69 42.6%, #E8577B 46.23%, #E56694 49.71%, #E279B4 53.09%, #E27AB5 53.19%, #9C7ADE 59.86%) !important;
              }
              .btn-primary,.btn-primary-lappiz,.btn{
                font-weight: 700 !important;
                background :linear-gradient(74.74deg, #F1E499 -1.97%, #F2DD91 -1.66%, #F6C073 -0.2%, #F9A95A 1.4%, #FC9647 3.19%, #FE8A39 5.26%, #FF8231 7.87%, #FF802F 12.73%, #FA713A 16.11%, #F2584C 22.95%, #ED4957 29.2%, #EB445B 34.31%, #EB465E 38.75%, #EA4C69 42.6%, #E8577B 46.23%, #E56694 49.71%, #E279B4 53.09%, #E27AB5 53.19%, #9C7ADE 59.86%) !important;
                border-color : linear-gradient(74.74deg, #F1E499 -1.97%, #F2DD91 -1.66%, #F6C073 -0.2%, #F9A95A 1.4%, #FC9647 3.19%, #FE8A39 5.26%, #FF8231 7.87%, #FF802F 12.73%, #FA713A 16.11%, #F2584C 22.95%, #ED4957 29.2%, #EB445B 34.31%, #EB465E 38.75%, #EA4C69 42.6%, #E8577B 46.23%, #E56694 49.71%, #E279B4 53.09%, #E27AB5 53.19%, #9C7ADE 59.86%) !important;
              }
              h2[class="accordion-header"]{
                    position: sticky !important;
                    top: 0 !important;
                    z-index: 100 !important;
              }
              .sldt-active{
                z-index: 200000 !important;
              }
    
            `,
        active: true,
        priority: false,
      },
      {
        name: "epayco",
        to: "body",
        tag: "script",
  
        property: {
          src: "https://checkout.epayco.co/checkout.js",
        //   integrity:
        //     "sha384-FhXw7b6AlE/jyjlZH5iHa/tTe9EpJ1Y55RjcgPbjeWMskSxZt1v9qkxLJWNJaGni",
        //   crossorigin: "anonymous",
        },
        active: false,
        priority: false,
      },
      {
        name: "bold",
        to: "head",
        tag: "script",
  
        property: {
          src: "https://checkout.bold.co/library/boldPaymentButton.js",
        //   integrity:
        //     "sha384-FhXw7b6AlE/jyjlZH5iHa/tTe9EpJ1Y55RjcgPbjeWMskSxZt1v9qkxLJWNJaGni",
        //   crossorigin: "anonymous",
        },
        active: false,
        priority: false,
      },
      {
        name: "wompi",
        to: "head",
        tag: "script",
  
        property: {
          src: "https://checkout.wompi.co/widget.js",
        //   integrity:
        //     "sha384-FhXw7b6AlE/jyjlZH5iHa/tTe9EpJ1Y55RjcgPbjeWMskSxZt1v9qkxLJWNJaGni",
        //   crossorigin: "anonymous",
        },
        active: false,
        priority: false,
      },
      {
        name: "highlight.css",
        to: "head",
        tag: "link",
  
        property: {
          href: "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/default.min.css",
          rel:"stylesheet"
        //   integrity:
        //     "sha384-FhXw7b6AlE/jyjlZH5iHa/tTe9EpJ1Y55RjcgPbjeWMskSxZt1v9qkxLJWNJaGni",
        //   crossorigin: "anonymous",
        },
        active: true,
        priority: false,
      },
      {
        name: "highlight.js",
        to: "head",
        tag: "script",
  
        property: {
          src: "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/highlight.min.js",
        //   integrity:
        //     "sha384-FhXw7b6AlE/jyjlZH5iHa/tTe9EpJ1Y55RjcgPbjeWMskSxZt1v9qkxLJWNJaGni",
        //   crossorigin: "anonymous",
        },
        active: true,
        priority: false,
      },
      {
        name: "highlight.execute",
        to: "body",
        tag: "script",
  
        property: {
          // innerHTML: `hljs.highlightAll();`,
        //   integrity:
        //     "sha384-FhXw7b6AlE/jyjlZH5iHa/tTe9EpJ1Y55RjcgPbjeWMskSxZt1v9qkxLJWNJaGni",
        //   crossorigin: "anonymous",
        },
        innerHTML: `hljs.highlightAll();`,
        active: false,
        priority: false,
      },
    ];  
    constructor(){}
    async addScript(type){
      console.log(type);
      // console.log()
      this.#Scripts[this.#Scripts.findIndex(sc=>sc.name === type)].active = true;
      // console.log(this.#Scripts[this.#Scripts.findIndex(sc=>sc.name === type)].active)
      await this.setScript(type);
    }
    async setScript(type) {
      const scripts = !type ? this.#Scripts : this.#Scripts.filter(sc => sc.name === type);
    //   console.log(scripts);
      scripts.forEach((script) => {
        const tag = document.createElement(script.tag);
        Object.entries(script.property).forEach(([key, value]) => {
          tag.setAttribute(key, value);
        });
        tag.setAttribute("cargado",false)
        tag.id = script.name;
        if (script.hasOwnProperty("innerHTML")) {
          tag.innerHTML = script.innerHTML;
          // console.log(script.innerHTML);
          const inner = script.innerHTML
          // tag.insertAdjacentHTML('beforeend',inner)
        }
        // console.log(tag)
        if (!document[script.to].querySelector("#" + tag.id)) {
          script.active && document[script.to].append(tag);
          script.active &&
            (tag.onload = () => {
              console.log("LOAD ..." + script.name);
              tag.setAttribute("cargado",true)
              script.enabled = true;
            });
        }
      });
    }
  };