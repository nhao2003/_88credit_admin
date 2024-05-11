import ApiService from "../../../services/ApiService";

export class PostRepo {
  static handleFetchPost = async () => {
    const response = await ApiService.get(
      "posts?post_status[eq]='approved'&page=all"
    );
    const posts = response.result;
    console.log("length", posts.length);
    if (!posts) {
      throw new Response("", {
        status: 404,
        statusText: "Not Found",
      });
    }
    const postLending = posts.filter((post) => post.type === "lending");
    const postBorrowing = posts.filter((post) => post.type === "borrowing");
    console.log("lease", postLending);
    console.log("no lease", postBorrowing);
    return { postLending, postBorrowing };
  };
}
