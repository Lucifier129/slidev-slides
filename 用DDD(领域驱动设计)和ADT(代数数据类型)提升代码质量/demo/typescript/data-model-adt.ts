export type VerifiedEmailInfo = {
  type: 'VerifiedEmailInfo';
  email: string;
  verifiedAt: string;
};

type UnverifiedEmailInfo = {
  type: 'UnverifiedEmailInfo';
  email: string;
};

type EmailInfo = VerifiedEmailInfo | UnverifiedEmailInfo;

type LoginUserInfo = {
  type: 'LoginUserInfo';
  id: string;
  name: string;
  emailInfo: EmailInfo;
};

type GuestUserInfo = {
  type: 'GuestUserInfo';
  name: string;
};


type ErrorResponse = {
  type: 'ErrorResponse';
  error: string;
};

type DataResponse = {
  type: 'DataResponse';
  data: UserInfo;
};

type JsonResponse = ErrorResponse | DataResponse;

type UserInfo = LoginUserInfo | GuestUserInfo;

declare let user: UserInfo




const handleLoginUser = (userInfo: LoginUserInfo) => {
  console.log('login user name', userInfo.name);
}

const handleLoginUser1 = (userInfo: LoginUserInfo) => {
  handleLoginUser(userInfo);
}

const handleLoginUser2 = (userInfo: LoginUserInfo) => {
  handleLoginUser1(userInfo);
}



if (user.type === 'LoginUserInfo') {
  handleLoginUser2(user)
} else {




  
  handleLoginUser2(user)
}




