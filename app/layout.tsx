import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ひだまり整骨院 正雀院 | 摂津市正雀の整骨院",
  description: "大阪府摂津市正雀本町にあるひだまり整骨院正雀院。交通事故・肩こり・腰痛・骨盤矯正など。阪急正雀駅より徒歩4分。各種保険・交通事故・労災対応。TEL: 06-6319-3339",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body>{children}</body>
    </html>
  );
}
