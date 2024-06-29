export interface ImageCardProps {
    imgUrl: string;
    imgUrlBig:string;
    imgDescr: string;
    imgLikes:number;
    onClick: (imgUrlBig: string,imgLikes:number) => void;
  }