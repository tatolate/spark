//Jsonの型定義
interface ContentDataType {
    Accounts: {
      name: string,
      image: string,
      description: string
    }[];
  
    PostContents_Front: {
      Acount_id: string;
      PostTitle: string;
      PostContent: string;
      PostImage: string;
      PostDate: string;
      Comments: {
        Comment_id: string;
        CommentContent: string;
        CommentDate: string;
      }[];
    }[];
  
  }