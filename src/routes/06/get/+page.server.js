export async function load({ url }) {
    const email = url.searchParams.get('email');
    const senha = url.searchParams.get('senha');
  
    if (!email || !senha) return { status: 400 };
    if (senha !== '1234') return { status: 401 };
  
    return { status: 200, email };
  }