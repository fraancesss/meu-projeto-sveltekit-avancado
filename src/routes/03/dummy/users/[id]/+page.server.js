export async function load({ params }) {

    const res = await fetch(`https://dummyjson.com/user/${params.id}`);
    const user = await res.json();

    const res2 = await fetch(`https://dummyjson.com/posts/user/${params.id}`);
    const posts = await res2.json();


    return { user, posts };
  }