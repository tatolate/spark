//Jsonの型定義
interface ContentDataType {
    Accounts: {
      name: string,
      id: string,
      image: string | HTMLImageElement,
      description: string
    }[];
    PostContents_Front: {
      AccountImage: string | HTMLImageElement;
      Account_id: string;
      PostContent: string;
      Account_name: string;
      PostImage: string | HTMLImageElement;
      PostDate: string;
      Comments: {
        account_id: string;
        CommentContent: string;
        CommentDate: string;
      }[];
    }[];
    PostContents_Back:{
      AccountImage: string | HTMLImageElement;
      Account_id: string;
      PostContent: string;
      Account_name: string;
      PostImage: string | HTMLImageElement;
      PostDate: string;
      Comments: {
        account_id: string;
        CommentContent: string;
        CommentDate: string;
      }[];
    }[];
  
  }