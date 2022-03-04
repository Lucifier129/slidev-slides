data VerifiedEmailInfo = VerifiedEmailInfo
  { verifiedEmail :: String,
    verifiedEmailAt :: Int
  }
  deriving (Show, Eq)

newtype UnverifiedInfo = UnverifiedInfo
  { unverifiedEmail :: String
  }
  deriving (Show, Eq)

data EmailInfo = Verified VerifiedEmailInfo | Unverified UnverifiedInfo deriving (Show, Eq)

verifiedEmailInfo =
  VerifiedEmailInfo
    { verifiedEmail = "abc@test.com",
      verifiedEmailAt = 123
    }

unverifiedEmailInfo =
  UnverifiedInfo
    { unverifiedEmail = "abc@test.com"
    }

printEmailInfo :: EmailInfo -> IO ()
printEmailInfo emailInfo = case emailInfo of
  Verified emailInfo -> do
    print $ "Verified email " ++ verifiedEmail emailInfo ++ " at: " ++ show (verifiedEmailAt emailInfo)
  Unverified unverifiedInfo -> do
    print $ "Unverified email " ++ unverifiedEmail unverifiedInfo


main :: IO ()
main = do
  printEmailInfo $ Verified verifiedEmailInfo
  printEmailInfo $ Unverified unverifiedEmailInfo