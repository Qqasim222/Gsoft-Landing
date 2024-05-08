"use client";
import { FunctionComponent, PropsWithChildren} from "react";
import {ApolloProvider } from "@apollo/client";
import { client } from "@/api/graphql/client";
import { Button, Tooltip } from "@mui/material";
import { WhatsappIcon } from "react-share";
import Link from "next/link";
const ApploClientProvider: FunctionComponent<PropsWithChildren> = ({ children }) => {



  return (
 <ApolloProvider client={client}>
   <Tooltip title="Whatsapp us">
            <Button
              style={{
                position: "fixed",
                bottom: "15px",
                right: "15px",
                cursor: "pointer",
                zIndex: "99999999",
                backgroundColor: "transparent",
              }}
            >
              <Link
                href="https://api.whatsapp.com/send?phone=+924232215942&text=I came across your website and was wondering if you could assist me with some information about [product/service]. Can we chat now?"
                target="_blank"
                rel="noreferrer"
              >
                <WhatsappIcon title="whatsapp"   style={{ borderRadius: "60px" }} />

              </Link>
            </Button>
          </Tooltip>
    {children}
    </ApolloProvider>
        );
};

export default ApploClientProvider;