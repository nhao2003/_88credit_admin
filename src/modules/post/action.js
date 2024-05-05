import { redirect } from "react-router-dom";
import ApiService from "../../services/ApiService";

export async function action({ request, params }) {
  const data = await request.formData();
  const id = data.get("id");
  console.log("id", id);
  const type = data.get("type");
  if (type === "approve") {
    try {
      console.log("approve request");
      const result = await ApiService.post({
        url: `posts/approve?id=${id}`,
        data: {},
      });
      if (result.status == "success") {
        alert("approve success");
      } else {
        alert("error");
      }
      return null;
    } catch (e) {
      console.log(e);
      alert(e);
      return null;
    }
  }
  if (type === "reject") {
    try {
      console.log("reject request");
      const result = await ApiService.post({
        url: `reject-post/${id}`,
        data: {
          rejected_reason: data.get("rejected_reason"),
        },
      });
      console.log("rejected results", result);
      if (result.status == "success") {
        alert("reject success");
      } else {
        alert("error");
      }
      return null;
    } catch (e) {
      console.log(e);
      alert(e);
      return null;
    }
  }
  if (type === "delete") {
    try {
      console.log("delete request");
      const result = await ApiService.patch({
        url: `posts/delete?id=${id}`,
        data: {},
      });
      console.log("delete results", result);
      if (result.status == "success") {
        alert("delete success");
      } else {
        alert("error");
      }
      return null;
    } catch (e) {
      console.log(e);
      alert(e);
      return null;
    }
  }
}

export function rejectPost(id, reason) {
  return ApiService.patch({
    url: `reject-post/${id}`,
    data: {
      rejected_reason: reason,
    },
  });
}

export function approvePost(id) {
  return ApiService.patch({ url: `approve-post/${id}`, data: {} });
}
