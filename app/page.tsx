"use client";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { stringToToken, tokenToString } from "@/lib/tokenizer";
import { toast } from "sonner";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [value, setValue] = useState("");
  const [output, setOutput] = useState("")

  const [token, setToken] = useState("");
  const [decoded, setDecoded] = useState("");
  useEffect(() => {
    if (value.trim() === "") {
      setOutput("");
      return;
    }
    const token = stringToToken(value);
    setOutput(token);
  }, [value]);

  useEffect(() => {
    if(token.trim() === "") {
      setDecoded("");
      return;
    }
    const string = tokenToString(token);
    setDecoded(string);
  }, [token]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
     toast.success("Copied to clipboard!");
    }).catch(err => {
      console.error("Failed to copy: ", err);
      toast.error("Failed to copy to clipboard.");
    });
  };

  
  return (
    <div className="w-11/12 mx-auto min-h-screen flex flex-col my-20">
      <h1 className="font-bold text-center mb-6 text-2xl f">
        String to Token
      </h1>
      <div className="flex flex-col md:flex-row gap-4 w-full mb-20">
        <Card className="w-full min-h-[10rem]">
          <CardHeader>
            <CardTitle>Input</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              id="input"
              className="w-full h-full font-mono resize-none shadow-none"
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Type something..."
            />
          </CardContent>
        </Card>
        <Card className="w-full relative min-h-[10rem]">
          <CardHeader>
            <CardTitle>Output</CardTitle>
            <Button className=" absolute top-2 right-2" variant="ghost" onClick={() => copyToClipboard(output)}>
            <Copy className=""/>
            </Button>

          </CardHeader>
          <CardContent>{output}</CardContent>
        </Card>
      </div>
      <h2 className="font-bold text-center mb-4 text-2xl">Token to String</h2>
      <div className="flex flex-col md:flex-row gap-4 w-full">
        <Card className="w-full min-h-[10rem]">
          <CardHeader>
            <CardTitle>Input</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              id="input"
              className="w-full h-full resize-none shadow-none"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              placeholder="Paste your token..."
            />
          </CardContent>
        </Card>
        <Card className="w-full relative min-h-[10rem]">
          <CardHeader>
            <CardTitle>Output</CardTitle>
            <Button className=" absolute top-2 right-2" variant="ghost" onClick={() => copyToClipboard(decoded)}>
            <Copy className=""/>
            </Button>
          </CardHeader>
          <CardContent className="font-mono">{decoded}</CardContent>
        </Card>
      </div>
    </div>
  );
}
