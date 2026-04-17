export  default async function BlogPage({params}:any){
    const postId=(await params).blogId;
    return <div>
       Blog Pagee{JSON.stringify(postId)}
    </div>
}