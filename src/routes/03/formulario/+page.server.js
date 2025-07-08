export async function load({ url }) {
  console.log(url);
 
  const fruta = url.searchParams.get('fruta');
  const legume = url.searchParams.get('legume');
 
  return { fruta, legume };
}