export async function sendRestRequest (urlParams, serviceUrl) {
  let IP = serviceUrl;
  const requestOptions = {
      method: urlParams.methodType,
      headers: { 'Content-Type': 'application/json' , 'x-tenantId' : 'HIS20QC'},
  };
  if(urlParams.methodType==='POST' || urlParams.methodType==='PUT'){
      requestOptions.body=JSON.stringify(urlParams.requestData)
  }
  const url = IP + urlParams.url
  console.log(IP,urlParams,"SERVICE CHECK")
  const response = await fetch(url, requestOptions)
  const data = await response.json();
  return data;
}
export async function getImage(urlParams, tagId, serviceUrl) {
  let IP = serviceUrl;
  const requestOptions = {
      method: urlParams.methodType,
      headers: { 'Content-Type': 'application/json' },
      responseType: 'arraybuffer'
  };
  if(urlParams.methodType==='POST'){
      requestOptions.body=JSON.stringify(urlParams.requestData)
  }
  const url = IP + urlParams.url
 
  const response = await fetch(url, requestOptions);
  const data = await response.blob();

  return data
}