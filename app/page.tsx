"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Textarea } from "@/components/ui/textarea";
import { stringToToken, tokenToString } from "@/lib/tokenizer";
import { toast } from "sonner";
import { Copy } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [value, setValue] = useState("");
  const [output, setOutput] = useState("");
  const [token, setToken] = useState("");
  const [decoded, setDecoded] = useState("");

  useEffect(() => {
    if (value.trim() === "") {
      setOutput("");
      return;
    }
    setOutput(stringToToken(value));
  }, [value]);

  useEffect(() => {
    if (token.trim() === "") {
      setDecoded("");
      return;
    }
    setDecoded(tokenToString(token));
  }, [token]);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast.success("Copied to clipboard!");
    }).catch(() => {
      toast.error("Failed to copy to clipboard.");
    });
  };

  return (
    <div className="w-full min-h-screen flex flex-col items-center justify-start py-10 bg-gradient-to-br from-[#18181b] via-[#23232a] to-[#1a1a23]">
      <div className="w-11/12 mx-auto">
      <h1 className="font-extrabold text-center mb-6 text-2xl bg-gradient-to-r from-[#7f5af0] via-[#2cb67d] to-[#ff6f3c] text-transparent bg-clip-text drop-shadow-xl tracking-tight">
        Text to Token Converter
      </h1>
      <div className="flex flex-col md:flex-row gap-8 w-full  mb-16">
        <Card className="w-full min-h-[16rem] bg-[#23232a] border border-[#2cb67d] shadow-2xl">
          <CardHeader>
            <CardTitle className="text-[#7f5af0] text-lg font-semibold">Text</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              id="input"
              className="w-full h-24 font-mono resize-none shadow-none "
              value={value}
              onChange={(e) => setValue(e.target.value)}
              placeholder="Type your text here..."
            />
          </CardContent>
        </Card>
        <Card className="w-full relative min-h-[12rem] bg-[#23232a] border border-[#7f5af0] shadow-2xl">
          <CardHeader>
            <CardTitle className="text-[#ff6f3c] text-lg font-semibold">Token</CardTitle>
            <Button
              className="absolute top-4 right-4"
              variant="ghost"
              size="icon"
              onClick={() => copyToClipboard(output)}
              disabled={!output}
              aria-label="Copy token"
            >
              <Copy className="text-[#94a1b2]" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="font-mono text-[#fffffe] break-words min-h-[2rem]">{output || <span className="text-[#94a1b2]">Token will appear here</span>}</div>
          </CardContent>
        </Card>
      </div>
      <h2 className="font-bold text-center mb-8 text-2xl bg-gradient-to-r from-[#ff6f3c] via-[#7f5af0] to-[#2cb67d] text-transparent bg-clip-text drop-shadow-lg tracking-tight">
        Token to Text Converter
      </h2>
      <div className="flex flex-col md:flex-row gap-8 w-full">
        <Card className="w-full min-h-[16rem] bg-[#23232a] border border-[#7f5af0] shadow-2xl">
          <CardHeader>
            <CardTitle className="text-[#ff6f3c] text-lg font-semibold">Token</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              id="token"
              className="w-full h-24 font-mono resize-none shadow-none"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              placeholder="Paste your token here..."
            />
          </CardContent>
        </Card>
        <Card className="w-full relative min-h-[12rem] bg-[#23232a] border border-[#2cb67d] shadow-2xl">
          <CardHeader>
            <CardTitle className="text-[#2cb67d] text-lg font-semibold">Text</CardTitle>
            <Button
              className="absolute top-4 right-4"
              variant="ghost"
              size="icon"
              onClick={() => copyToClipboard(decoded)}
              disabled={!decoded}
              aria-label="Copy text"
            >
              <Copy className="text-[#94a1b2]" />
            </Button>
          </CardHeader>
          <CardContent>
            <div className="font-mono text-[#fffffe] break-words min-h-[2rem]">{decoded || <span className="text-[#94a1b2]">Decoded text will appear here</span>}</div>
          </CardContent>
        </Card>
      </div>
  </div>
    </div>
  );
}
