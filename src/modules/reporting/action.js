import { redirect } from "react-router-dom";
import ApiService from "../../services/ApiService";

export async function action({ request, params }){
    const data = await request.formData()
    const id = data.get("id")
    console.log("id", id)
    const type = data.get("type")
    if(type === "approve"){
      try{
        console.log("approve request")
        const result =  await ApiService.patch({url:`reports/${id}`, data:{"status": "resolved"}});
        if(result.status == "success"){
          alert("approve success")
        }else{
          alert("error")
        }
        return null;
      }catch(e){
        console.log(e)
        alert(e)
        return null;
      }
    }
    if (type === "reject"){
      try{
        console.log("reject request")
        const result =  await ApiService.patch({url:`reports/${id}`, data:{"status": "rejected"}});
        console.log("rejected results", result)
        if(result.status == "success"){
          alert("reject success")
        }else{
          alert("error")
        }
        return null;
      }catch(e){
        console.log(e)
        alert(e)
        return null;
      }
    }
    if (type === "delete"){
      try{
        console.log("delete request")
        const result =  await ApiService.patch({url:`posts/delete?id=${id}`, data:{}});
        console.log("delete results", result)
        if(result.status == "success"){
          alert("delete success")
        }else{
          alert("error")
        }
        return null;
      }catch(e){
        console.log(e)
        alert(e)
        return null;
      }
    }

    if (type === "ban"){
        try{
          console.log("ban request")
          const result =  await ApiService.patch({url:`users/${id}/ban`, data:{}});
          console.log("ban results", result)
          if(result.status == "success"){
            alert("ban success")
          }else{
            alert("error")
          }
          return null;
        }catch(e){
          console.log(e)
          alert(e)
          return null;
        }
      }

      if (type === "unban"){
        try{
          console.log("unban request")
          const result =  await ApiService.patch({url:`users/${id}/unban`, data:{}});
          console.log("ban results", result)
          if(result.status == "success"){
            alert("unban success")
          }else{
            alert("error")
          }
          return null;
        }catch(e){
          console.log(e)
          alert(e)
          return null;
        }
      }
}

export function updateReportStatus(id, type) {
  if (['resolved', 'reject'].indexOf(type) === -1)
    throw new Error('Invalid type');
  const apiUrl = `reports/${id}`;
  const data = {
    status: type,
  };
  return ApiService.patch(apiUrl, data);
}

export function deletePost(id) {
  const apiUrl = `posts/delete?id=${id}`;
  return ApiService.patch(apiUrl);
}

export function banUser(id) {
  const apiUrl = `users/${id}/ban`;
  return ApiService.patch(apiUrl);
}

export function unbanUser(id) {
  const apiUrl = `users/${id}/unban`;
  return ApiService.patch(apiUrl);
}

