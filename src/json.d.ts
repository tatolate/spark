//Jsonの型定義
interface ContentDataType {
    Accounts: {
      name: string,
      id: string,
      image: string | HTMLImageElement,
      description: string
    }[];
    PostContents_Front: {
      Account_id: string;
      PostContent: string;
      PostImage: string | HTMLImageElement;
      PostDate: string;
      Comments: {
        Comment_id: string;
        CommentContent: string;
        CommentDate: string;
      }[];
    }[];
    PostContents_Back:{
      Account_id: string;
      PostContent: string;
      PostImage: string | HTMLImageElement;
      PostDate: string;
      Comments: {
        Comment_id: string;
        CommentContent: string;
        CommentDate: string;
      }[];
    }[];
  
  }