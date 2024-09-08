fetch("https://s-checkout.builderall.com/api/affiliates/requests?page=1", {
  "headers": {
    "accept": "application/json",
    "accept-language": "es-ES,es;q=0.9,pt;q=0.8",
    "authorization": "Bearer eyJpdiI6IkVGci9hV3FoRk1jZlBibGdrVGRKYUE9PSIsInZhbHVlIjoiV1ByNVBDSzN3K29BVVRiTWwzNzdPd2VYeTdodnF4b0l0a0tQM01WRkluRGNjcTlZdlZ4c1pWVjNrNnBoYWJLNStrc2pkdUhrR0s3cDM4TExPRFpkZE1QTTk5SGVybXFydGFZcTRmQlRtQThBYzJQWGZ4VmRxWFlhL0lKRlIzbDMiLCJtYWMiOiI3ZTdmOWM4NzQwMzdiYTFmMGY3ZTU3YjhkMDU1YzA5MjRkYWNmY2E5OGZlNWQ0ZTNiMWI2ZDRiMGYzYjQxMmMxIiwidGFnIjoiIn0=",
    "priority": "u=1, i",
    "sec-ch-ua": "\"Chromium\";v=\"128\", \"Not;A=Brand\";v=\"24\", \"Google Chrome\";v=\"128\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    // "x-csrf-token": "5xU6Wq5sk9x8dy43ZHi2DiukS8JFEh2Njad5Kg2Y",
    "x-requested-with": "XMLHttpRequest",
    // "x-xsrf-token": "eyJpdiI6IklnbTdacWU1WGEwR3A0SHQwYWVnRFE9PSIsInZhbHVlIjoiNGhGSGh3eTlkMDlSRXVWV2tnenFISlN1aUVOMXREWk1iU0dSVGV2ZTE4TkNjRm4ydGp0bEtkWERNckllYW5XUVl2K29HcElaaURmTWdFU2x2U3VYamd0MGlyVDViMzZRZnBBdWpYejlSOWZpejYvRS9TcXdReTBSODJMWXBDMWUiLCJtYWMiOiI1Yjc5ZWU5M2VhZmNhZGNiMzUzMWVjMmQxOWU0NjYzOGEwMTNkZDY1ZDZhMWJkMDc3OWE2NTY3MWRhODM4MGM2IiwidGFnIjoiIn0=",
    // "cookie": "OTRK_DAY_OMB=20240904; intelligence_ba=alisadosdanys%40gmail.com; _gid=GA1.2.1464162516.1725682143; _hjSessionUser_1035500=eyJpZCI6Ijk5ZTAyZDdlLTJhM2YtNTY2Yy1iN2EzLWZjNWY5YTYxZDUxNSIsImNyZWF0ZWQiOjE3MjU2ODIxNDM0MjQsImV4aXN0aW5nIjp0cnVlfQ==; _hjSession_1035500=eyJpZCI6ImU5Y2IwMjIzLTA4MDUtNGJkMy04NjBlLThjZDdlYTNmNjY4MCIsImMiOjE3MjU3NTE3NzI0NDksInMiOjEsInIiOjAsInNiIjowLCJzciI6MCwic2UiOjAsImZzIjowLCJzcCI6MH0=; cf_clearance=ujlSR9vParHAzGmah76SvVDhi89saGZ4JrW0SNRy5zA-1725751997-1.2.1.1-W4jNuyIvITdboavgx778oLyQ_PL3XZ899JuPXO2duBsKVQT4ydDvyNLt3J5q9ip_3siXsbTw3F_tLOkQebzKIhOYxUgVgGFG5QX0Ggz8FAf0n2QZHWw5AyzarrcpCpdFN8PeZP30Y49N32Q5JP84aII8yvt71ytNVI_QFcqYuamoDRlnEjwN.W6ecAatZ_y3PXMnJTFMtGIQ5Hpqlil_z29afwDXrjRlo_vKxcD8egTbdJVmNr6zBl6stoH05OAXyzbjDjl5.pHgo1zkYWnOGyhAERx57b6BZ7jqK.xU4Ad.CJxt.iSjhEUdVCmQOWuIoy.V5ZTPhRpXA8iZoUd1hJP2FTi6_VjNybQ2VVNlfSg216pd.11nAFooUUFE0KImUeck6lLoWJXA1GyC5Fic.Q; _ga_7NDC7ZHFWC=GS1.1.1725751994.3.1.1725752003.51.0.0; remember_layouts_59ba36addc2b2f9401580f014c7f58ea4e30989d=eyJpdiI6InFtMW5mZWRlaXVzZmlQU1BDaEI2OWc9PSIsInZhbHVlIjoiOC9NUFpBOWNmbG1Kb0hoS0lVcEsyOFlEK1FOd2lZZGlCT09PWjA1SGRmYnhYa05QWkdvTUs1RllYOFlPNnhOc0lyTHhKQUJXeGNmMnFSY2t2ZE51b1dGMWVmUWlsVUlOVEFoQlp3M0FRcUp6cXpJbFNMR2xoYW1lN2ZQLzFRc2IvM3EvNFdieER3Q29jOGw1Y25KczlPNFNRaDBBb1cwQ0J2SEluY0NacTJjPSIsIm1hYyI6ImQ5YzEyNmRmYmVhZDE5ZGQ4NDU2MTkwODg0ODBhMmRiZjFlMjI1N2U1OWM2NjdiYWEzZDllYzI3N2JkMDdiNTMiLCJ0YWciOiIifQ%3D%3D; _ga_5WP671P0YY=GS1.1.1725751946.3.1.1725752018.0.0.0; _ga=GA1.2.2056518056.1725682143; remember_affiliates_59ba36addc2b2f9401580f014c7f58ea4e30989d=eyJpdiI6Ik1pcWFheTdidDhBeDdqWmdmaEtBU1E9PSIsInZhbHVlIjoiTjhtV0ZwanF0QUZuMzJ0b2FJb0Ezc3NYM3FWT3F0Y01LZ1hKekdXUXdmNzR5dVNRejRWc2hZYjBRbmdhNWJTS2ZtR09DZTM5MEM2R0YwSEY1ejFGNUhwMmxRUnE2Skg1ZzhCWjRUQzZNZGNpZTdkNEpLZDQ0RmVDNnBob3kzeGpHeGY3SjYrOVJCWVU5QWhOYk43ZDZTWUExeCttbW0vNnJtaDZKMHVyOTE4PSIsIm1hYyI6ImY4MzhiNWYwNmU0Y2I2ODQ5YWU0NWVjNzdmODdkOTVjNWZhYjhjMjhlOWUzNWQ4Y2ZjMDE3NDYyODczYWRmMjQiLCJ0YWciOiIifQ%3D%3D; XSRF-TOKEN=eyJpdiI6IklnbTdacWU1WGEwR3A0SHQwYWVnRFE9PSIsInZhbHVlIjoiNGhGSGh3eTlkMDlSRXVWV2tnenFISlN1aUVOMXREWk1iU0dSVGV2ZTE4TkNjRm4ydGp0bEtkWERNckllYW5XUVl2K29HcElaaURmTWdFU2x2U3VYamd0MGlyVDViMzZRZnBBdWpYejlSOWZpejYvRS9TcXdReTBSODJMWXBDMWUiLCJtYWMiOiI1Yjc5ZWU5M2VhZmNhZGNiMzUzMWVjMmQxOWU0NjYzOGEwMTNkZDY1ZDZhMWJkMDc3OWE2NTY3MWRhODM4MGM2IiwidGFnIjoiIn0%3D; supercheckout_session=eyJpdiI6IlNSeTdsOWNmTUlyaVdydzlXZzZVVlE9PSIsInZhbHVlIjoiaUs0bW5ZVTdCT1R3cDV6RXhZbXFPZVY2TXRhdHFUdUxEOU5hTFVnOHpHT0tuK3RRT1N3cXpPOE5mNnZkZWFmRndhbjREOE9kcE12ZjZUc1FTRkdyZjhZNzNObFFkYXJKaFFPU1NKQTdHYng4MnBZTHVrUHo0cHBDNEJJeHpVZUgiLCJtYWMiOiI2YTUyNzEyNzhiYzYxY2ZlOWFhMGRmODkxNTA4YTM5NWY5YTg3NDg2Zjg5MzAwNTgwMDFmMDA1M2MxNjAwNTdkIiwidGFnIjoiIn0%3D",
    "Referer": "https://s-checkout.builderall.com/affiliates/affiliations",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": null,
  "method": "GET"
})
// .then(r=>r.json()).then(r=> console.log(r)).catch(e=>console.log(e));
fetch("https://kontest.snipper.top/_server", {
  "headers": {
    "accept": "*/*",
    "accept-language": "es-ES,es;q=0.9,pt;q=0.8",
    "content-type": "application/json",
    "sec-ch-ua": "\"Chromium\";v=\"128\", \"Not;A=Brand\";v=\"24\", \"Google Chrome\";v=\"128\"",
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": "\"Windows\"",
    "sec-fetch-dest": "empty",
    "sec-fetch-mode": "cors",
    "sec-fetch-site": "same-origin",
    "x-server-id": "c_9494#$$function0",
    "x-server-instance": "server-fn:4",
    "Referer": "https://kontest.snipper.top/",
    "Referrer-Policy": "strict-origin-when-cross-origin"
  },
  "body": JSON.stringify({"t":{"t":9,"i":0,"l":1,"a":[{"t":0,"s":3}],"o":0},"f":31,"m":[]}),
  "method": "POST"
}).then(s =>s.text()).then(s => console.log(s)).catch(e=>console.log(e));