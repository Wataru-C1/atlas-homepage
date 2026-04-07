"use client";

import { useEffect, useState } from "react";

const RESERVATION_URL = "https://atlas-reservation-customer.vercel.app"; // 予約フォームURL（デプロイ後に変更）

const sections = [
  { id: "top", label: "TOP" },
  { id: "adjustment", label: "施術" },
  { id: "examination", label: "検査" },
  { id: "target", label: "対象者" },
  { id: "cases", label: "施術例" },
  { id: "price", label: "料金" },
  { id: "access", label: "Access" },
  { id: "connect", label: "SNS" },
];

function useScrollSpy(ids) {
  const [active, setActive] = useState(ids[0]);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);
  return active;
}

/* ─── Shared Styles ─── */
const sectionStyle = {
  padding: "100px 24px",
  maxWidth: "800px",
  margin: "0 auto",
};

const sectionTitle = {
  fontFamily: "'Cormorant Garamond', serif",
  fontSize: "clamp(28px, 5vw, 40px)",
  fontWeight: 400,
  letterSpacing: "4px",
  color: "var(--navy)",
  textAlign: "center",
  marginBottom: "12px",
};

const sectionSub = {
  fontSize: "12px",
  letterSpacing: "3px",
  color: "var(--accent)",
  textAlign: "center",
  fontWeight: 500,
  marginBottom: "48px",
};

const divider = {
  width: "40px",
  height: "1px",
  background: "var(--accent)",
  margin: "0 auto 48px",
};

const bodyText = {
  fontSize: "15px",
  lineHeight: 2,
  color: "var(--text-light)",
  fontWeight: 300,
};

const cardStyle = {
  background: "#fff",
  borderRadius: "12px",
  padding: "32px",
  boxShadow: "0 2px 20px rgba(0,0,0,0.04)",
  marginBottom: "20px",
};

const cardTitle = {
  fontSize: "17px",
  fontWeight: 600,
  color: "var(--navy)",
  marginBottom: "12px",
  display: "flex",
  alignItems: "center",
  gap: "10px",
};

const cardBody = {
  fontSize: "14px",
  lineHeight: 1.9,
  color: "var(--text-light)",
  fontWeight: 300,
};

export default function HomePage() {
  const active = useScrollSpy(sections.map((s) => s.id));

  return (
    <div style={{ background: "var(--bg)" }}>
      {/* ─── Navigation ─── */}
      <nav style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "rgba(26,39,68,0.95)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(201,169,110,0.15)",
      }}>
        <div style={{
          maxWidth: "900px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 24px",
          height: "56px",
        }}>
          <a href="#top" style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
            <img src="/logo.png" alt="ATLAS" style={{ width: "32px", height: "32px", objectFit: "contain" }} />
            <span style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "20px",
              fontWeight: 500,
              letterSpacing: "4px",
              color: "var(--white)",
            }}>
              ATLAS
            </span>
          </a>
          <div style={{ display: "flex", gap: "28px" }}>
            {sections.slice(1).map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                style={{
                  fontSize: "11px",
                  letterSpacing: "2px",
                  fontWeight: active === s.id ? 600 : 400,
                  color: active === s.id ? "var(--accent)" : "var(--gray)",
                  transition: "color 0.3s",
                  textDecoration: "none",
                }}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* ─── Hero ─── */}
      <section id="top" style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "linear-gradient(160deg, #111b30 0%, #1a2744 40%, #243352 100%)",
        textAlign: "center",
        padding: "80px 24px 0",
      }}>
        <img
          src="/logo.png"
          alt="ATLAS"
          style={{
            width: "clamp(80px, 16vw, 130px)",
            height: "auto",
            marginBottom: "24px",
            filter: "drop-shadow(0 4px 24px rgba(201,169,110,0.15))",
          }}
        />
        <div style={{
          fontSize: "12px",
          letterSpacing: "5px",
          color: "rgba(201,169,110,0.5)",
          fontFamily: "'Cormorant Garamond', serif",
          marginBottom: "16px",
        }}>
          UPPER CERVICAL SPECIFIC
        </div>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(40px, 8vw, 64px)",
          fontWeight: 400,
          letterSpacing: "10px",
          color: "var(--white)",
          marginBottom: "24px",
        }}>
          ATLAS
        </h1>
        <div style={{
          width: "50px",
          height: "1px",
          background: "linear-gradient(90deg, transparent, var(--accent), transparent)",
          marginBottom: "24px",
        }} />
        <p style={{
          fontSize: "clamp(15px, 2.5vw, 20px)",
          fontWeight: 300,
          letterSpacing: "3px",
          color: "var(--white)",
          opacity: 0.9,
        }}>
          健康を維持できる身体に。
        </p>
        <p style={{
          fontSize: "13px",
          color: "var(--gray)",
          marginTop: "40px",
          letterSpacing: "2px",
          fontWeight: 300,
        }}>
          上部頸椎専門の施術院
        </p>

      </section>

      {/* ─── Section: 上部頸椎の調整 ─── */}
      <section id="adjustment" style={sectionStyle}>
        <h2 style={sectionTitle}>Adjustment</h2>
        <p style={sectionSub}>上部頸椎の調整</p>
        <div style={divider} />

        <p style={{ ...bodyText, textAlign: "center", marginBottom: "48px" }}>
          第一頸椎（アトラス）は、頭蓋骨を支える最も重要な椎骨です。<br />
          わずかなズレが全身のバランスに影響を及ぼし、<br />
          さまざまな不調の原因となることがあります。
        </p>

        <div style={cardStyle}>
          <div style={cardTitle}>
            <span style={{ color: "var(--accent)", fontSize: "20px" }}>01</span>
            上部頸椎とは
          </div>
          <p style={cardBody}>
            第1頸椎（アトラス）と第2頸椎（アキシス）は、脊椎の中でも特に重要な役割を担っています。
            脳幹に最も近い位置にあり、神経伝達の要として全身の機能に深く関わっています。
            この部位の微細なズレは、身体全体の自然治癒力や自律神経のバランスに影響を与えます。
          </p>
        </div>

        <div style={cardStyle}>
          <div style={cardTitle}>
            <span style={{ color: "var(--accent)", fontSize: "20px" }}>02</span>
            調整の特徴
          </div>
          <p style={cardBody}>
            当院の調整は、最小限の力で最大限の効果を引き出すことを目指しています。
            バキバキと音を鳴らすような施術ではなく、正確な分析に基づいた繊細なアプローチで、
            身体本来の治癒力が発揮できる状態へと導きます。
            一人ひとりの状態に合わせた、オーダーメイドの施術を行います。
          </p>
        </div>

        <div style={cardStyle}>
          <div style={cardTitle}>
            <span style={{ color: "var(--accent)", fontSize: "20px" }}>03</span>
            調整の効果
          </div>
          <p style={cardBody}>
            上部頸椎が正しい位置に戻ることで、神経の流れが改善され、
            身体が本来持つ機能——自然治癒力や、血圧・脈拍などの調整力——が
            しっかりと発揮されるようになります。
            その結果、慢性的な不調の改善にとどまらず、
            睡眠の質や自律神経の安定など、全身的な変化を実感される方が多くいらっしゃいます。
          </p>
        </div>
      </section>

      {/* ─── Section: 検査 ─── */}
      <section id="examination" style={{
        ...sectionStyle,
        background: "linear-gradient(180deg, var(--bg) 0%, #eae7e0 50%, var(--bg) 100%)",
        maxWidth: "100%",
        padding: "100px 24px",
      }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={sectionTitle}>Examination</h2>
          <p style={sectionSub}>検査について</p>
          <div style={divider} />

          <p style={{ ...bodyText, textAlign: "center", marginBottom: "48px" }}>
            正確な調整のためには、正確な検査が不可欠です。<br />
            当院では複数の検査を組み合わせ、<br />
            お身体の状態を多角的に分析します。
          </p>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "20px" }}>
            <div style={cardStyle}>
              <div style={cardTitle}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                姿勢分析
              </div>
              <p style={cardBody}>
                足底圧重心測定器を用いて、身体の重心バランスを客観的に数値化します。
                足裏にかかる圧力の分布は全身の姿勢バランスを反映しており、
                上部頸椎のズレが身体全体にどのような影響を及ぼしているかを把握できます。
                施術前後で測定を行い、重心の変化を比較することで調整の効果を確認します。
              </p>
            </div>

            <div style={cardStyle}>
              <div style={cardTitle}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5">
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                </svg>
                神経学的検査
              </div>
              <p style={cardBody}>
                赤外線皮膚温度測定器「ThermoLab」を使用し、
                脊柱の左右の皮膚温度差を測定します。
                温度の左右差は自律神経のバランスを反映しており、
                痛みのない非侵襲的な検査で神経系の機能状態を客観的に評価します。
                施術前後で比較することで、調整の効果を確認します。
              </p>
            </div>

            <div style={cardStyle}>
              <div style={cardTitle}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5">
                  <rect x="3" y="3" width="18" height="18" rx="2" />
                  <path d="M3 9h18M9 3v18" />
                </svg>
                可動域検査
              </div>
              <p style={cardBody}>
                頸椎を中心とした関節の動きを検査し、制限がある部分や左右の差を
                詳しく確認します。
              </p>
            </div>
          </div>

          <div style={{
            background: "var(--navy)",
            borderRadius: "12px",
            padding: "28px 32px",
            marginTop: "32px",
            textAlign: "center",
          }}>
            <p style={{ fontSize: "14px", color: "var(--white)", fontWeight: 300, lineHeight: 1.9 }}>
              初回の方は検査・測定を含め<span style={{ color: "var(--accent)", fontWeight: 600 }}>約60分</span>のお時間をいただいております。<br />
              お身体の現状と今後の方針を丁寧にご説明いたします。
            </p>
          </div>
        </div>
      </section>

      {/* ─── Section: 対象者 ─── */}
      <section id="target" style={sectionStyle}>
        <h2 style={sectionTitle}>For You</h2>
        <p style={sectionSub}>このような方へ</p>
        <div style={divider} />

        <p style={{ ...bodyText, textAlign: "center", marginBottom: "48px" }}>
          以下のようなお悩みをお持ちの方に、<br />
          上部頸椎の調整をおすすめしています。
        </p>

        <div style={{ display: "grid", gap: "12px" }}>
          {[
            "慢性的な頭痛・偏頭痛に悩んでいる",
            "肩こり・首の痛みが取れない",
            "腰痛を繰り返している",
            "自律神経の乱れを感じる（めまい・不眠・倦怠感）",
            "姿勢の悪さが気になっている",
            "病院では異常がないと言われたが不調が続く",
            "根本的な改善を目指したい",
            "薬に頼らず健康を維持したい",
          ].map((item, i) => (
            <div key={i} style={{
              background: "#fff",
              borderRadius: "10px",
              padding: "18px 24px",
              fontSize: "14px",
              color: "var(--text)",
              fontWeight: 400,
              display: "flex",
              alignItems: "center",
              gap: "14px",
              boxShadow: "0 1px 8px rgba(0,0,0,0.03)",
            }}>
              <span style={{
                width: "6px",
                height: "6px",
                borderRadius: "50%",
                background: "var(--accent)",
                flexShrink: 0,
              }} />
              {item}
            </div>
          ))}
        </div>

        <div style={{
          marginTop: "48px",
          textAlign: "center",
          padding: "32px",
          background: "rgba(201,169,110,0.08)",
          borderRadius: "12px",
          border: "1px solid rgba(201,169,110,0.15)",
        }}>
          <p style={{ fontSize: "15px", color: "var(--navy)", fontWeight: 500, lineHeight: 2 }}>
            年齢・性別を問わず、どなたでもお受けいただけます。<br />
            お気軽にご相談ください。
          </p>
        </div>
      </section>

      {/* ─── Section: 施術例 ─── */}
      <section id="cases" style={{
        ...sectionStyle,
        background: "linear-gradient(180deg, var(--bg) 0%, #eae7e0 50%, var(--bg) 100%)",
        maxWidth: "100%",
        padding: "100px 24px",
      }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={sectionTitle}>Cases</h2>
          <p style={sectionSub}>施術例</p>
          <div style={divider} />

          <p style={{ ...bodyText, textAlign: "center", marginBottom: "48px" }}>
            実際に施術を受けられた方の事例をご紹介します。<br />
            ※ 個人の感想であり、効果を保証するものではありません。
          </p>

          {/* ThermoLab Before/After */}
          <div style={{
            ...cardStyle,
            padding: "32px",
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
              <span style={{ fontSize: "12px", color: "var(--accent)", fontWeight: 600, letterSpacing: "1px" }}>CASE 01</span>
              <span style={{ fontSize: "13px", color: "var(--gray)", fontWeight: 400 }}>70代男性 ／ 腰痛・肩の痛み</span>
            </div>
            <p style={{ ...cardBody, marginBottom: "24px" }}>
              慢性的な腰痛と肩の痛みを訴えて来院。ThermoLabによる皮膚温度測定では、
              施術前に脊柱左右の温度差が確認されました。
              施術後は疼痛に改善を認め、睡眠の質にも向上がみられました。
              以下は施術前後の皮膚温度データの比較です。
            </p>
            <div style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: "16px",
            }}>
              <div style={{ textAlign: "center" }}>
                <div style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "var(--navy)",
                  letterSpacing: "2px",
                  marginBottom: "8px",
                }}>BEFORE</div>
                <img
                  src="/case-before.png"
                  alt="施術前 ThermoLab"
                  style={{
                    width: "100%",
                    borderRadius: "8px",
                    border: "1px solid #eee",
                  }}
                />
              </div>
              <div style={{ textAlign: "center" }}>
                <div style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "var(--accent)",
                  letterSpacing: "2px",
                  marginBottom: "8px",
                }}>AFTER</div>
                <img
                  src="/case-after.png"
                  alt="施術後 ThermoLab"
                  style={{
                    width: "100%",
                    borderRadius: "8px",
                    border: "1px solid #eee",
                  }}
                />
              </div>
            </div>
          </div>

          {/* 追加の施術例 */}
          <div style={{ display: "grid", gap: "24px", marginTop: "24px" }}>
            <div style={{
              ...cardStyle,
              padding: "32px",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
                <span style={{ fontSize: "12px", color: "var(--accent)", fontWeight: 600, letterSpacing: "1px" }}>CASE 02</span>
                <span style={{ fontSize: "13px", color: "var(--gray)", fontWeight: 400 }}>30代女性 ／ 産後の疲労・不眠・肩腰の痛み</span>
              </div>
              <p style={{ ...cardBody, marginBottom: "24px" }}>
                出産後3か月で来院。育児疲労による夜間不眠に加え、
                育児動作での背筋や肩関節周囲筋の使い過ぎによる疼痛を訴えていました。
                施術前のThermoLabデータでは、頸部の上下・左右間に温度差が見られましたが、
                調整後はかなり均一化されています。
                施術後は肩関節周囲の可動域に改善がみられ、腰痛も軽減していました。
              </p>
              <div style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "16px",
              }}>
                <div style={{ textAlign: "center" }}>
                  <div style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    color: "var(--navy)",
                    letterSpacing: "2px",
                    marginBottom: "8px",
                  }}>BEFORE</div>
                  <img
                    src="/case02-before.png"
                    alt="施術前 ThermoLab"
                    style={{
                      width: "100%",
                      borderRadius: "8px",
                      border: "1px solid #eee",
                    }}
                  />
                </div>
                <div style={{ textAlign: "center" }}>
                  <div style={{
                    fontSize: "11px",
                    fontWeight: 600,
                    color: "var(--accent)",
                    letterSpacing: "2px",
                    marginBottom: "8px",
                  }}>AFTER</div>
                  <img
                    src="/case02-after.png"
                    alt="施術後 ThermoLab"
                    style={{
                      width: "100%",
                      borderRadius: "8px",
                      border: "1px solid #eee",
                    }}
                  />
                </div>
              </div>
            </div>

            <div style={{
              ...cardStyle,
              padding: "32px",
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
                <span style={{ fontSize: "12px", color: "var(--accent)", fontWeight: 600, letterSpacing: "1px" }}>CASE 03</span>
                <span style={{ fontSize: "13px", color: "var(--gray)", fontWeight: 400 }}>10代男性 ／ 身体を整えたい</span>
              </div>
              <p style={{ ...cardBody, marginBottom: "24px" }}>
                身体を整えたいとの希望で来院。ThermoLabによる測定の結果、
                脊柱左右の温度差はほぼなく、神経系のバランスが良好な状態でした。
                調整の必要がないと判断し、施術は行わずに終了しています。
                当院では、検査結果に基づき不要な施術は行いません。
              </p>
              <div style={{ textAlign: "center", maxWidth: "360px", margin: "0 auto" }}>
                <div style={{
                  fontSize: "11px",
                  fontWeight: 600,
                  color: "var(--navy)",
                  letterSpacing: "2px",
                  marginBottom: "8px",
                }}>測定結果</div>
                <img
                  src="/case03.png"
                  alt="ThermoLab 測定結果"
                  style={{
                    width: "100%",
                    borderRadius: "8px",
                    border: "1px solid #eee",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Section: 料金 ─── */}
      <section id="price" style={sectionStyle}>
        <h2 style={sectionTitle}>Price</h2>
        <p style={sectionSub}>料金のご案内</p>
        <div style={divider} />

        <div style={{
          ...cardStyle,
          padding: "40px",
        }}>
          <table style={{
            width: "100%",
            borderCollapse: "collapse",
            fontSize: "14px",
          }}>
            <tbody>
              {[
                ["初診", "¥3,000", "登録・カルテ・問診費用"],
                ["検査・測定", "¥3,000", "足底圧重心測定・姿勢測定・可動域測定・脊柱皮膚温測定"],
                ["調整", "¥4,000", ""],
                ["出張料", "¥2,000〜", "応相談"],
              ].map(([menu, price, note], i, arr) => (
                <tr key={i} style={{ borderBottom: i < arr.length - 1 ? "1px solid #eee" : "none" }}>
                  <td style={{
                    padding: "18px 0",
                    fontWeight: 600,
                    color: "var(--navy)",
                    fontSize: "15px",
                    letterSpacing: "1px",
                  }}>
                    {menu}
                  </td>
                  <td style={{
                    padding: "18px 0",
                    textAlign: "right",
                    fontWeight: 600,
                    color: "var(--accent)",
                    fontSize: "17px",
                    fontFamily: "'Cormorant Garamond', serif",
                    letterSpacing: "1px",
                    whiteSpace: "nowrap",
                  }}>
                    {price}
                  </td>
                  <td style={{
                    padding: "18px 0 18px 16px",
                    fontSize: "12px",
                    color: "var(--gray)",
                    fontWeight: 400,
                  }}>
                    {note}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p style={{
          fontSize: "12px",
          color: "var(--gray)",
          textAlign: "center",
          marginTop: "16px",
        }}>
          ※ 表示価格はすべて税込です。
        </p>
      </section>

      {/* ─── Section: Access ─── */}
      <section id="access" style={{
        padding: "100px 24px",
        background: "linear-gradient(180deg, var(--bg) 0%, #eae7e0 100%)",
      }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <h2 style={sectionTitle}>Access</h2>
          <p style={sectionSub}>アクセス</p>
          <div style={divider} />

          <div style={{
            ...cardStyle,
            padding: "40px",
          }}>
            <table style={{
              width: "100%",
              borderCollapse: "collapse",
              fontSize: "14px",
            }}>
              <tbody>
                {[
                  ["院名", "ATLAS（アトラス）"],
                  ["電話番号", "070-9080-1454"],
                  ["受付時間", "平日 18:00〜22:00 / 日曜 9:00〜22:00"],
                  ["定休日", "不定休"],
                  ["予約", "完全予約制"],
                  ["所在地", "福岡県北九州市門司区大字畑2154-5"],
                  ["出張施術", "対応可（お電話にてご相談ください）"],
                ].map(([label, value], i, arr) => (
                  <tr key={i} style={{ borderBottom: i < arr.length - 1 ? "1px solid #eee" : "none" }}>
                    <td style={{
                      padding: "16px 0",
                      width: "120px",
                      fontWeight: 600,
                      color: "var(--navy)",
                      verticalAlign: "top",
                      fontSize: "13px",
                      letterSpacing: "1px",
                    }}>
                      {label}
                    </td>
                    <td style={{
                      padding: "16px 0",
                      color: "var(--text-light)",
                      fontWeight: 300,
                    }}>
                      {label === "電話番号" ? (
                        <a href="tel:070-9080-1454" style={{ color: "var(--accent)", fontWeight: 500 }}>
                          {value}
                        </a>
                      ) : value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div style={{ borderRadius: "12px", overflow: "hidden", marginTop: "20px" }}>
            <iframe
              src="https://maps.google.com/maps?q=%E7%A6%8F%E5%B2%A1%E7%9C%8C%E5%8C%97%E4%B9%9D%E5%B7%9E%E5%B8%82%E9%96%80%E5%8F%B8%E5%8C%BA%E5%A4%A7%E5%AD%97%E7%95%912154-5&t=m&z=17&output=embed&iwloc=0"
              width="100%"
              height="300"
              style={{ border: 0, display: "block" }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ATLAS 所在地"
            />
          </div>
        </div>
      </section>

      {/* ─── Section: SNS / Connect ─── */}
      <section id="connect" style={sectionStyle}>
        <h2 style={sectionTitle}>Connect</h2>
        <p style={sectionSub}>つながる</p>
        <div style={divider} />

        <p style={{ ...bodyText, textAlign: "center", marginBottom: "48px" }}>
          最新情報やお知らせはSNSで配信しています。<br />
          お気軽にフォロー・友だち追加してください。
        </p>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "24px",
          maxWidth: "560px",
          margin: "0 auto",
        }}>
          {/* Instagram */}
          <div style={{
            ...cardStyle,
            textAlign: "center",
            padding: "36px 24px",
          }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--navy)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: "16px" }}>
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <circle cx="12" cy="12" r="5" />
              <circle cx="17.5" cy="6.5" r="1" fill="var(--navy)" stroke="none" />
            </svg>
            <div style={{ fontSize: "15px", fontWeight: 600, color: "var(--navy)", marginBottom: "8px", letterSpacing: "2px" }}>
              Instagram
            </div>
            <p style={{ fontSize: "12px", color: "var(--text-light)", marginBottom: "20px" }}>
              施術の様子や健康情報を発信中
            </p>
            <img
              src="/qr-instagram.png"
              alt="Instagram QR"
              style={{
                width: "160px",
                height: "160px",
                margin: "0 auto",
                borderRadius: "8px",
                objectFit: "contain",
              }}
            />
          </div>

          {/* LINE */}
          <div style={{
            ...cardStyle,
            textAlign: "center",
            padding: "36px 24px",
          }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="var(--navy)" style={{ marginBottom: "16px" }}>
              <path d="M12 2C6.48 2 2 5.82 2 10.5c0 2.92 1.94 5.5 4.86 7.14-.19.66-.68 2.42-.78 2.79-.13.48.17.47.37.34.15-.1 2.44-1.66 3.43-2.34.69.1 1.4.15 2.12.15 5.52 0 10-3.82 10-8.5S17.52 2 12 2z"/>
            </svg>
            <div style={{ fontSize: "15px", fontWeight: 600, color: "var(--navy)", marginBottom: "8px", letterSpacing: "2px" }}>
              公式LINE
            </div>
            <p style={{ fontSize: "12px", color: "var(--text-light)", marginBottom: "20px" }}>
              ご予約・お問い合わせはLINEからも
            </p>
            <img
              src="/qr-line.png"
              alt="LINE QR"
              style={{
                width: "160px",
                height: "160px",
                margin: "0 auto",
                borderRadius: "8px",
                objectFit: "contain",
              }}
            />
            <a
              href="https://lin.ee/9p7ibhv"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-block",
                marginTop: "16px",
                padding: "10px 28px",
                background: "#06C755",
                color: "#fff",
                fontSize: "13px",
                fontWeight: 600,
                borderRadius: "6px",
                textDecoration: "none",
                letterSpacing: "1px",
              }}
            >
              友だち追加
            </a>
          </div>
        </div>

        {/* Reservation CTA */}
        <div style={{
          marginTop: "60px",
          textAlign: "center",
          padding: "40px 24px",
          background: "var(--navy)",
          borderRadius: "14px",
        }}>
          <p style={{
            fontSize: "16px",
            color: "var(--white)",
            fontWeight: 300,
            letterSpacing: "2px",
            marginBottom: "24px",
          }}>
            オンラインでのご予約はこちら
          </p>
          <a
            href={RESERVATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-block",
              padding: "14px 56px",
              background: "linear-gradient(135deg, var(--accent), var(--accent-light))",
              color: "var(--navy-dark)",
              fontSize: "14px",
              fontWeight: 700,
              letterSpacing: "2px",
              borderRadius: "6px",
              textDecoration: "none",
              boxShadow: "0 4px 16px rgba(201,169,110,0.3)",
            }}
          >
            予約する
          </a>
        </div>
      </section>

      {/* ─── Footer ─── */}
      <footer style={{
        background: "var(--navy)",
        padding: "40px 24px",
        textAlign: "center",
      }}>
        <img src="/logo.png" alt="ATLAS" style={{ width: "48px", height: "48px", objectFit: "contain", marginBottom: "12px", opacity: 0.8 }} />
        <br />
        <span style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "18px",
          fontWeight: 400,
          letterSpacing: "6px",
          color: "var(--white)",
        }}>
          ATLAS
        </span>
        <p style={{
          fontSize: "11px",
          color: "var(--gray)",
          marginTop: "12px",
          letterSpacing: "1px",
        }}>
          上部頸椎専門
        </p>
        <div style={{
          width: "30px",
          height: "1px",
          background: "var(--accent)",
          margin: "16px auto",
          opacity: 0.5,
        }} />
        <p style={{
          fontSize: "10px",
          color: "var(--gray)",
          letterSpacing: "1px",
          opacity: 0.6,
        }}>
          &copy; {new Date().getFullYear()} ATLAS. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
