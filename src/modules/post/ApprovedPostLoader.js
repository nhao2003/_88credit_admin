import { ApprovedPostRepo } from "../../repository/ApprovedPostRepo";

export async function loader(){
    const result = await ApprovedPostRepo();
    const approvedpost = result.post;
    const lendingPosts = approvedpost.filter(post => post.type === "lending");
    const borrowingPosts = approvedpost.filter(post => post.type === "borrowing");
    //console.log(lendingPosts);

    return { lendingPosts, borrowingPosts};
}