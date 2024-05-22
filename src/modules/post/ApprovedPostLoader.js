import { ApprovedPostRepo } from "../../repository/ApprovedPostRepo";

export async function loader(){
    const result = await ApprovedPostRepo();
    const approvedpost = result.post;
    const postLending = approvedpost.filter(post => post.type === "lending");
    const postBorrowing = approvedpost.filter(post => post.type === "borrowing");
    //console.log(lendingPosts);

    return { postLending, postBorrowing};
}