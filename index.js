1.
--------------------------------------------------------------------
function getCookie(cName) {
  const name = cName + "=";
  const cDecoded = decodeURIComponent(document.cookie);
  const cArr = cDecoded.split('; ');
  let res;
  cArr.forEach(val => {
    if (val.indexOf(name) === 0) res = val.substring(name.length);
  })
  return res
};

let CopyCookie= getCookie('refresh_token');
console.log(CopyCookie);



2.
--------------------------------------------------------------------
document.cookie="refresh_token=//CopyCookie//;"
