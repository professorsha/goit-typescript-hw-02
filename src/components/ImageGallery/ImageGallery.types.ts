export interface ImageItem {
    id: string;
    urls: {
      small: string;
      regular:string;
    };
    slug: string;
    likes:number;
  }
export interface ImageGalleryProps{
    items: ImageItem[];
    onClick:(id:string)=>void;
}