import { serverURL1 } from "./serverURL1";
import { commonAPI } from "./commonAPI";

// upload video

export const uploadVideo = async(reqBody)=>{
   return await commonAPI('POST',`${serverURL1}/videos`,reqBody)
}

//2 Get all videos
 
export const getAllVideos=async()=>{
   return await commonAPI('GET',`${serverURL1}/videos`,"")
 }
 //3)delete video
 
 export const deleteVideo=async(id)=>{
   return await commonAPI('DELETE',`${serverURL1}/videos/${id}`,{})
 }

 //4 add to history
export const addToHistory=async(videoDetails)=>{
  return await commonAPI('POST',`${serverURL1}/history`,videoDetails)
}

//5 Get all watch history
export const getHistory=async()=>{
  return await commonAPI('GET',`${serverURL1}/history`,"")
}
//6delete watch history
export const deleteWatchHistory=async(id)=>{
  return await commonAPI('DELETE',`${serverURL1}/history/${id}`,{})
}

//7 add category
export const addCategory=async(reqBody)=>{
  return await commonAPI('POST',`${serverURL1}/category`,reqBody)
}
//8 get all category
export const getAllCategory=async()=>{
  return await commonAPI('GET',`${serverURL1}/category`,"")
}
// 9 delete category
export const deleteCategory=async(id)=>{
  return await commonAPI('DELETE',`${serverURL1}/category/${id}`,{})
}