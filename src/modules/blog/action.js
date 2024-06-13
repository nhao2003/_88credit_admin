import { redirect } from "react-router-dom";
import ApiService from "../../services/ApiService";
import { successNoti, errorNoti } from "../../services/AlertService";
import { Alert } from "antd";

export async function action({ request, params }) {
  try {
    const formData = await request.formData();
    const type = formData.get("type");
    const title = formData.get("title");
    const description = formData.get("description");
    const author = formData.get("author");
    const thumbnail = formData.get("thumbnail");
    const content = formData.get("content");

    if (type === "delete") {
      const id = formData.get("id");
      if (!id) {
        alert("Không có ID để xóa");
        return null;
      }
      const result = await ApiService.delete({ url: `blog/${id}` });
      console.log("delete result", result);
      alert("Xóa bài blog thành công");
      return redirect("/blogs");
    }

    if (!title || !description || !author || !thumbnail || !content) {
      alert("Vui lòng điền đầy đủ thông tin");
      return null;
    }

    if (type === "create") {
      const body = {
        title,
        shortDescription: description,
        author,
        thumbnail,
        content,
      };
      const res = await ApiService.post({ url: "blog", data: body });
      return redirect("/blogs");
    } else if (type === "edit") {
      const id = formData.get("id");
      const data = {
        title,
        short_description: description,
        author,
        thumbnail,
        content,
      };
      const result = await ApiService.patch({ url: `blog/${id}`, data });
      if (result.status === "success") {
        alert("Chỉnh sửa bài blog thành công");
        return redirect(`/blogs/${id}`);
      } else {
        alert("Đã có lỗi trong quá trình chỉnh sửa bài blog, xin thử lại");
      }
      return null;
    }
  } catch (err) {
    alert(err.message);
    return null;
  }

  //   } else if (type === 'delete') {
  //     try {
  //       const id = data.get('id');
  //       console.log('delete request');
  //       const result = await ApiService.delete({ url: `developers/${id}` });
  //       console.log('delete results', result);
  //       if (result.status == 'success') {
  //         alert('delete success');
  //       } else {
  //         alert('error');
  //       }
  //       return null;
  //     } catch (e) {
  //       console.log(e);
  //       alert(e);
  //       return null;
  //     }
  //   } else if (type === 'edit') {
  //     const data = Object.fromEntries(formData);
  //     const images = JSON.parse(data.images);
  //     const id = data.id;
  //     //extract url list from form
  //     const imagePaths = images.map((image) => {
  //       if (image.url) return image.url;
  //       return image.response;
  //     });
  //     //assign again for data
  //     data.images = imagePaths;
  //     const result = await ApiService.patch({
  //       url: `developers/${id}`,
  //       data: data,
  //     });
  //   }

  //   return null;
}
