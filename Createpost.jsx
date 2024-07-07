
import { redirect} from "react-router-dom";
import { Form } from "react-router-dom";

const Createpost=()=>{

//const {addpost}=useContext(Postlist); 

return <Form method="POST" className="create-post" > 
<div className="mb-3">
  <label htmlFor="user-id" className="form-label">Enter your userId here</label>
  <input type="text" name="user-id" className="form-control" id="user-id"  placeholder="Your User Id"/>
</div>
<div className="mb-3">
  <label htmlFor="title" className="form-label">Post Title</label>
  <input type="text" name="title"className="form-control" id="title"  placeholder="How are you feeling today..."/>
</div>
<div className="mb-3">
  <label htmlFor="body" className="form-label">Post Content</label>
  <textarea type="text" rows="4" name="body" className="form-control" id="body"  placeholder="Tell us more about it..."/>
</div>
<div className="mb-3">
  <label htmlFor="reactions" className="form-label">Number of reactions</label>
  <input type="text" name="reactions"className="form-control" id="reactions"  placeholder="How many people reacted to this post."/>
</div>
<div className="mb-3">
  <label htmlFor="tags" className="form-label">Enter your hashtags here</label>
  <input type="text" name="tags"className="form-control" id="tags"  placeholder="Please enter tags using space"/>
</div>
<button type="submit" className="btn btn-primary">Post</button>
</Form>
};


export async function createpostaction(data){
  const formdata=await data.request.formData();
  const postdata=Object.fromEntries(formdata);
  postdata.tags=postdata.tags.split("");
  console.log(postdata);


  fetch('https://dummyjson.com/posts/add', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify( postdata),

  })
  .then(res => res.json())
  .then(post=>{console.log(post);
  });
  return redirect("/Post-list");
};

export default Createpost;