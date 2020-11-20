import {Dispatch} from "redux";

export const UtilityFunctions = {
    GetRandomID : function() : string {
        let number = Math.random() // 0.9394456857981651
        number.toString(36); // '0.xtis06h6'
        return number.toString(36).substr(2, 9); // 'xtis06h6'
    }
}

export const PostFetch = function(url : string, callback : (data:any) => void) {
    try {
        //fetch("./dataset/fake_tasks.json")

        fetch(url)
        .then(res => res.json())
        .then(posts => {
            callback(posts)            
        });
    } catch (error) {
      console.error(error);
    }
}

export const OnEnlargmeImageEvent = function(p_event : React.MouseEvent<HTMLImageElement>) {
    let enlargeClassNmae = "enlargeImg";
    p_event.currentTarget.className = (p_event.currentTarget.className == "") ? enlargeClassNmae : "";
}

export const DispatchFetchPost = (dispatch : Dispatch, type: string, url : string) => {
    try {
        fetch(url)
        .then(res => res.json())
        .then(posts => {
            dispatch({
                type : type,
                payload : posts
            })
        });
    } catch (error) {
      console.error(error);
    }
  }

