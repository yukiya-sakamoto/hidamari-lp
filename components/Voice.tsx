const VOICES = [
  { title: "バレーボールをしてます", text: "捻挫をして来院しましたが、体の歪みも見つけていただきました。テーピングや電気治療で練習を休むことなく完治させてもらいました。腰痛もすっかり良くなり足腰の不安がすっかりなくなりました。ひだまり接骨院、バンザイ！！です。", who: "Kさん・女性・17歳" },
  { title: "出会えて良かった", text: "今まで行った中で一番丁寧で、先生方やスタッフの方々がすごく親切で心も体も癒されました。他の整骨院では良くならなかった骨盤のゆがみが改善しました。", who: "Mさん・女性・21歳" },
  { title: "長年の悩みが解消！", text: "30年のトラック運転手生活で肩・腰の痛みが強く、すがる思いで来ました。院長先生の親切な説明に治るかも…と思わせてくれ、3回目の治療でほとんど痛みはなくなり本当に感謝しています。", who: "Hさん・男性・57歳" },
  { title: "骨盤矯正で姿勢が改善", text: "体のゆがみが気になっていましたが、こちらで骨盤矯正をしてもらって以来、姿勢も良くなり、スポーツをしても腰が痛まなくなりました。", who: "Yさん・女性・24歳" },
  { title: "1回で歩けるように", text: "他に行っても全然治らなかった股関節の痛みが1回の治療で楽になり、歩けるようになりました。あの痛みは何だったのか不思議なくらいです。", who: "Sさん・女性・72歳" },
  { title: "産後の腰痛が解消", text: "出産・育児の毎日で腰痛が続いていました。友人の紹介で当院に来て治療を受けるとウソみたいに痛みが楽になりました。", who: "Oさん・女性・32歳" },
];

export default function Voice() {
  return (
    <section id="voice" style={{ backgroundColor: "#FFFAF5", padding: "88px 24px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 12 }}>
            <div style={{ width: 24, height: 1, backgroundColor: "#E8730A" }} />
            <span style={{ fontSize: 10, color: "#E8730A", fontWeight: 700, letterSpacing: "0.25em" }}>PATIENT VOICE</span>
            <div style={{ width: 24, height: 1, backgroundColor: "#E8730A" }} />
          </div>
          <h2 style={{ fontSize: "clamp(22px, 3.5vw, 36px)", fontWeight: 900, color: "#2D1400", letterSpacing: "-0.02em" }}>患者様の声</h2>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }} className="grid-3">
          {VOICES.map((v, i) => (
            <div key={i} style={{ backgroundColor: "#fff", border: "1px solid #FDDCB5", borderRadius: 8, padding: "24px 22px" }}>
              <div style={{ display: "flex", gap: 6, marginBottom: 12 }}>
                {[1,2,3,4,5].map(s => <span key={s} style={{ color: "#E8730A", fontSize: 14 }}>★</span>)}
              </div>
              <div style={{ fontSize: 13, fontWeight: 800, color: "#2D1400", marginBottom: 10 }}>「{v.title}」</div>
              <p style={{ fontSize: 12, color: "#7A4010", lineHeight: 1.9, marginBottom: 14 }}>{v.text}</p>
              <div style={{ fontSize: 11, color: "#B45309", fontWeight: 600, borderTop: "1px solid #FFF0DC", paddingTop: 10 }}>{v.who}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
