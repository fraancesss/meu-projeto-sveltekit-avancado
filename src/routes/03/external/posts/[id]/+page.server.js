export async function load({ params, fetch }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
    const post = await res.json();

    const res2 = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${params.id}`);
    const comments = await res2.json();
    
    return { post, comments };
}