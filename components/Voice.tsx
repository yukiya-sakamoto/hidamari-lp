const VOICES = [
  { title: "バレーボールをしてます", text: "テーピングや電気治療で練習を休むことなく完治させてもらいました。腰痛もすっかり良くなり足腰の不安がすっかりなくなりました。", who: "Kさん・女性・17歳", tag: "ねんざ・腰痛" },
  { title: "出会えて良かった", text: "今まで行った中で一番丁寧で、先生方やスタッフの方々がすごく親切で心も体も癒されました。骨盤のゆがみが改善しました。", who: "Mさん・女性・21歳", tag: "骨盤矯正" },
  { title: "30年の腰痛がほぼ消えた", text: "30年のトラック運転手生活で肩・腰の痛みが強く、3回目の治療でほとんど痛みはなくなり本当に感謝しています。", who: "Hさん・男性・57歳", tag: "腰痛・肩こり" },
  { title: "1回で歩けるように", text: "他に行っても全然治らなかった股関節の痛みが1回の治療で楽になり、歩けるようになりました。", who: "Sさん・女性・72歳", tag: "股関節" },
  { title: "交通事故後の対応が完璧", text: "ひだまり整骨院は交通事故のことを全て知り尽くしている感じで良かったです。体の痛みも治り、仕事にも復帰でき家族も安心しています。", who: "Iさん・女性・30代", tag: "交通事故" },
  { title: "産後の腰痛が解消", text: "出産・育児の毎日で腰痛が続いていました。当院に来て治療を受けるとウソみたいに痛みが楽になりました。", who: "Oさん・女性・32歳", tag: "産後・腰痛" },
];

export default function Voice() {
  return (
    <section id="voice" style={{ backgroundColor: "#EBF7F1", padding: "80px 28px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 40 }}>
          <span className="sec-label" style={{ color: "#52B788" }}>PATIENT VOICE</span>
          <h2 style={{ fontSize: "clamp(20px, 3vw, 32px)", fontWeight: 900, color: "#1A1A1A" }}>患者様の声</h2>
          <p style={{ fontSize: 12, color: "#888", marginTop: 8 }}>実際にご来院いただいた患者様からいただいたお声です</p>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }} className="grid-3">
          {VOICES.map((v, i) => (
            <div key={i} style={{ backgroundColor: "#fff", border: "1px solid #A8DDBE", borderRadius: 8, padding: "24px 20px" }}>
              <div style={{ display: "inline-block", fontSize: 10, color: "#52B788", backgroundColor: "#EBF7F1", border: "1px solid #A8DDBE", padding: "2px 10px", borderRadius: 20, fontWeight: 700, marginBottom: 12 }}>{v.tag}</div>
              <div style={{ fontSize: 13, fontWeight: 800, color: "#1A1A1A", marginBottom: 10 }}>「{v.title}」</div>
              <p style={{ fontSize: 12, color: "#555", lineHeight: 2.0, marginBottom: 14 }}>{v.text}</p>
              <div style={{ fontSize: 11, color: "#888", borderTop: "1px solid #EBF7F1", paddingTop: 10 }}>{v.who}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
