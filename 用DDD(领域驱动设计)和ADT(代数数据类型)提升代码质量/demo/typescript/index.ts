type VerifiedEmailInfo = {
  type: 'VerifiedEmailInfo',
  verifiedEmail: string,
  verifiedAt: number
}

type UnverifiedEmailInfo = {
  type: 'UnverifiedEmailInfo',
  unverifiedEmail: string,
}

type EmailInfo = VerifiedEmailInfo | UnverifiedEmailInfo

const printEmailInfo = (emailInfo: EmailInfo) => {
  switch (emailInfo.type) {
    case 'VerifiedEmailInfo':
      console.log(`Verified email ${emailInfo.verifiedEmail} at ${emailInfo.verifiedAt}`)
      return
    case 'UnverifiedEmailInfo':
      console.log(`Unverified email ${emailInfo.unverifiedEmail}`)
      return
  }
}

const verifiedEmailInfo: VerifiedEmailInfo = {
  type: 'VerifiedEmailInfo',
  verifiedEmail: 'abc@test.com',
  verifiedAt: 123
}

const unverifiedEmailInfo: UnverifiedEmailInfo = {
  type: 'UnverifiedEmailInfo',
  unverifiedEmail: 'abc@test.com'
}

printEmailInfo(verifiedEmailInfo)
printEmailInfo(unverifiedEmailInfo)

