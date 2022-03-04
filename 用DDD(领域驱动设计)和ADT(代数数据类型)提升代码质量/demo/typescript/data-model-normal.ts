type UserInfo = {
  // 当用户未登录时，id 为空字符串
  id: string;
  // 当用户未登录时，name 为随机生成的昵称
  name: string;
  // 当用户未登录时，email 为空字符串
  email: string;
  // 用户是否登录
  isLogin: boolean;
  // 当邮箱未验证时，这个字段为 false
  isEmailVerified: boolean;
  // 当邮箱已验证时，这个字段为验证时间戳，否则为空字符串
  emailVerifiedAt: string;
};

// Http API 获取用户信息
type JsonResponse = {
  error?: string;
  // 当 error 为空时，这个字段为用户信息
  data?: UserInfo;
};

declare let user: UserInfo

const handleLoginUser = (userInfo: UserInfo) => {
  // 防御性编程，判断是否已登录
  if (!userInfo.isLogin) {
    return;
  }
  console.log('login user email', userInfo.email);
}
​
const handleLoginUser1 = (userInfo: UserInfo) => {
  // 防御性编程，判断是否已登录
  if (!userInfo.isLogin) {
    return;
  }
  console.log('login user email', userInfo.email);
}


const handleLoginUser2 = (userInfo: UserInfo) => {
  if (!userInfo.isLogin) {
    return;
  }
  console.log('login user name', userInfo.name);
}

const handleLoginUser3 = (userInfo: UserInfo) => {
  if (!userInfo.isLogin) {
    return;
  }
  console.log('login user name', userInfo.name);
}