export const ID_ECOMMERCE = "ucQa5uXzYl8TRIWX";
export const setDataUrl = (data, urlSearch) => {
    const reg = /(https|data|http).*?>/g;
    const url = data
      .match(reg)
      ?.find((description) => description.includes(urlSearch) && description)
      ?.replace('">', "")?.replaceAll("amp;","")?.replace("autoplay=true","autoplay=false")?.replace("muted=false","muted=true")
    //   ?.replaceAll("'/>", "");
    // console.log(url);
    return url;
    // https://api.snipper.top/api/api/codes-builderall
  };