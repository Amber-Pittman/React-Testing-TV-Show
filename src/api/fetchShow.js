import Axios from "axios";

export const fetchShow = () => {
    return Axios
    .get(
        "https://api.tvmaze.com/singlesearch/shows?q=stranger-things&embed=episodes"
      )
      .then(res => {
          console.log(res);
          return res
      });
}