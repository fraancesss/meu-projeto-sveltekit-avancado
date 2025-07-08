export async function load({ params, url }) {
    const rp1 = params.p1;
    const rp2 = params.p2;
    const sp1 = url.searchParams.get('p1');
    const sp2 = url.searchParams.get('p2');
 
    return { rp1, rp2, sp1, sp2 };
}