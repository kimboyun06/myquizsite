// 1. 문제 데이터 (paste.txt에서 자동 추출)
const questions = [
  { question: "포장 표준화의 요소는 (   ), (   ), (   )이다.", answer: "강도 표준화, 치수 표준화, 재료 표준화" },
  { question: "풀필먼트는 물류업체가 복수의 화주기업을 대신하여 주문 피킹, 포장, 배송을 대행하는 공동물류와 유사한 (   )형태를 말한다.", answer: "물류합리화" },
  { question: "풀필먼트의 기대효과는 물류비용 절감, (   ), 핵심역량 집중이다.", answer: "주문 리드타임 개선" },
  { question: "(   )는 유통경로 중 동일 단계에서 활동하는 복수의 기업이 결합한 형태이다.", answer: "수평적 유통경로" },
  { question: "(   )은 과거의 이력 자료나 데이터가 충분하지 않을 때, 개인의 통찰이나 경험을 바탕으로 한 수요예측 기법이다.", answer: "정성적 수요예측 기법" },
  { question: "(   )는 군사용어인 ‘병참’으로 전투를 제외한 모든 기능이다.", answer: "로지스틱스" },
  { question: "보세운송 이란 외국으로부터 수입하는 화물을 입항지에서 통관하지 않고 세관장에게 신고하거나, 승인을 얻어 외국물품상태 그대로 (   )으로 운송하는 것이다.", answer: "보세구역" },
  { question: "(   )는 화물운송 때 수반되는 자료와, 정보를 신속하게 수집하여 효율적으로 관리하는 시스템이다.", answer: "TMS" },
  { question: "(   )은 출하되는 화물의 양에 따라 적정한 크기의 차량선택과 한 대의 차량에 몇 개의 배송처의 화물을 적재할 것인지를 계산하는 등이 시스템이다.", answer: "적재관리 시스템, VMS" },
  { question: "(   )은 필요한 차량이나 운송하는 화물을 정보시스템을 이용하여 찾는 시스템이다.", answer: "구차구화 시스템, CVO" },
  { question: "(   )은 화물자동차의 운행경로와 배송처를 최적으로 설정해 주는 정보시스템이다.", answer: "라우팅 시스템" },
  { question: "운송 효율성을 평가하는 지표로서 (   ), (   ), (   ), 복화율 등이 있다.", answer: "가동률, 회전율, 영차률" },
  { question: "(   )은 일정기간 동안 화물을 운송하거나 운송을 위해 운행한 일수 비율을 나타낸다.", answer: "가동율" },
  { question: "(   )은 전체 운행거리 중 실제 화물을 적재하고 운행한 비율이다.", answer: "영차율" },
  { question: "택배란 화물을 가정까지 배달해 주는 (   )의 총칭이다.", answer: "물류서비스" },
  { question: "택배서비스의 특징은 (   ), (   ), (   ), 노동집약적 사업이다.", answer: "장치산업, 네트워크사업, 정보시스템사업" },
  { question: "택배물류의 형태는 (   )택배, (   )택배, (   )택배이다.", answer: "C2C, B2C, C2B" },
  { question: "택배업체가 제공하는 서비스 중 (   ) 서비스는 화물 인수자의 인수 확인을 수득하여 송화인에게 제공함으로써 상품대금의 청구, 청산을 도와주는 서비스이다.", answer: "배달증명" },
  { question: "철도운송은 철도역과 철도역 간 (   )구간에서 대량으로 화물을 운송한다.", answer: "간선운송" },
  { question: "철도운송은 (   )과 (   )으로 구분한다.", answer: "대량화물용, 소량화물용" },
  { question: "철도운송의 대량화물용 중 (   )은 화차단위 화물을 운송하는 것을 의미한다.", answer: "화차취급" },
  { question: "컨테이너 철도운송은 1960년대부터 (   )가 추진된 이후 지속적으로 발전하였다.", answer: "컨테이너화" },
  { question: "외항 화물선과 연계하여 (   )의 국내항 간 운송은 물론 내수용 화물을 국내항 간에 운송하는 것이다.", answer: "수출입화물" },
  { question: "연안운송을 통해 운송되는 화물은 석유, 시멘트, 철강제품, 모래 등 (   )에 필요한 화물들이다.", answer: "국가기간산업" },
  { question: "도시지역에 대한 생필품의 운송은 (   )이 전담한다.", answer: "연안화물선" },
  { question: "화물의 특성이나 1회 운송하는 화물량 그리고 공장이나 생산지 또는 목적지에 따라 (   ) 또는 (   )을 선택적으로 활용이 가능하다.", answer: "철도운송, 연안운송" },
  { question: "연안운송은 철도와 함께 교통혼잡을 완화시틸 수 있는 중요한 (   )으로 인식된다.", answer: "운송수단" },
  { question: "페리운송 시스템이란 육지와 도서지역 간 또는 육지 간을 운항하는 여객용 선박에 승객의 차량을 동시에 선적하여 이동시켜 주는 (   )을 말한다.", answer: "운송시스템" },
  { question: "페리 운송의 운영방법 중 (   )은 유인도선과 같이 화물자동차를 페리를 이용하여 도선하는 방법이나 해당 선박에 운전기사가 탑승하지 않고 차량만 선적한 후, 목적지에 도착하면 다른 운전기사가 운행하는 방식이다.", answer: "무인도선방법" },
  { question: "페리운송의 (   ), (   ), (   )등이 있다.", answer: "상하역비 절감, 신속한 운송, 화물의 안전성 향상" },
  { question: "(   )는 페리선 중 주로 승객과 일반화물, 일반승용차 및 화물차량을 적재하고 페리선을 말한다.", answer: "차량페리" },
  { question: "(   )는 페리선 중 철도화차를 적재하고 운항할 수 있는 특수설비를 갖춘 선박이다.", answer: "열차페리" },
  { question: "항공 화물용 던위 탑재 용기로 (   ), (   ), 이글루, 특수 ULD가 있다.", answer: "파렛트, 컨테이너" },
  { question: "항공 운송사업의 유형 중 (   )은 타인의 수요에 응하여 항공기를 사용하여 유상으로 여객 또는 화물을 운송하는 사업이다.", answer: "항공운송사업" },
  { question: "(   )은 타인의 수요에 응하여 항공기를 사용하여 유상으로 여객과 화물의 운송이외의 업무를 행하는 사업이다.", answer: "항공기 사용사업" },
  { question: "(   )은 항공운송사업자을 위하여 유상으로 항공기를 이용한 여객이나 화물의 국제운송계약 체결을 대리하는 사업이다.", answer: "항공운송총대리점업" },
  { question: "(   )은 타인의 수요에 응하여 유상으로 수출입 관련 서류와 그에 부수적인 견본품 등을 항공기를 이용하여 송달하는 사업으로 (   )으로 불린다.", answer: "상업서류 송달업, 국제택배업" },
  { question: "(   )은 혼재업자나 포워더로서 타인의 수요에 응하여 유상으로 자기의 명의로써 항공사와 항공기를 이용하여 화물을 혼자운송하는 사업자이다.", answer: "항공운송 주선사업" },
  { question: "항공물류업자의 종류 중 복합운송업자는 2가지 이상의 운송수단을 이용하여 운송, 보관, 하역, 통관 등의 과정을 통해 화주의 문전에서 문전까지 (   )을 목표로 한다.", answer: "일관운송" },
  { question: "(   )은 항공기로 화물을 운송코자 하는 고객을 위해 항공사를 대신해서 항공사의 이름으로 업무를 수행한다.", answer: "항공화물대리점업" },
  { question: "(   )란 비슷한 시기에 동일한 방향의 목적지로 운송되는 다수의 소규모 화물들을 집하해서 대형화한 후 중량단계의 낮은 요율을 적용받아 이익을 취하는 사업이다.", answer: "혼재업자" },
  { question: "(   )는 화물의 출발지와 목적지의 중간 지점에서 통과화물의 재발송 업무를 수행하는 기능을 의미한다.", answer: "중간운송주선업자" },
  { question: "항공화물운송장(AWB)은 항공사와 화주 간에 체결한 일종의 (   )를 의미한다.", answer: "화물운송계약 증명서" },
  { question: "항공화물운송장의 법적 성질은 비유통성, 증거증권, (   ), 요식증권이다.", answer: "면책증권" },
  { question: "항공사가 포워더에게 발행하는 경우를 (   )이라고 한다.", answer: "마스터 AWB" },
  { question: "포워더 소유의 운송장은 (   )이라고 한다.", answer: "자가 운송장" },
  { question: "유닛로드 시스템은 화물을 일정한 표준의 중량 또는 용적으로 (   )시켜 일관해서 기계... 를 이용하여 하역, 수송, 보관하는 시스템이다.", answer: "단위화" },
  { question: "유닛로드 시스템의 방법으로 (   )와 (   )를 이용하는 방법이 있다.", answer: "파렛트, 컨테이너" },
  { question: "유닛로드 시스템(한국산업표준의 정의)은 유닛로드를 도입함으로써 하역을 (   )하고 수송, 보관 등을 일관하여 합리화시키는 시스템이다.", answer: "기계화" },
  { question: "유닛로드의 형태는 파렛트, 컨테이너, 밴드포장, (   )가 있다.", answer: "집합포장" },
  { question: "유닛로드 시스템의 3원칙은 기계화, 표준화, (   ) 원칙이 있다.", answer: "하역의 최소" },
  { question: "지게차의 개발로 파렛트로드 상태로 (   )한다.", answer: "파렛트화" },
  { question: "해상 컨테이너의 사용은 미국 SEA LAND SERVICE(1956년)사에서 미국내 화물의 (   )에 이용한 것이 시초이다.", answer: "연안운송" },
  { question: "파렛트에 적재한 상태로 화물을 환적하지 않고 출발지에서 도착지까지 운송, 보관, 하역하는 방법이 (   ) 파렛트화, 컨테이너에 의해 유닛하된 것이 컨테이너화이다.", answer: "일관" },
  { question: "파렛트 치수의 표준화는 파렛트 규격 통일 및 (   )가 선행되어야 한다.", answer: "표준화" },
  { question: "파렛트 폴 시스템(PPS)는 (   )로 다수 화주대상 물류업체가 파렛트를 공동으로 이용하는 제도이다.", answer: "표준파렛트" },
  { question: "선박의 톤수 중 (   )는 여객이나 화물을 적재할 수 있는 용적으로, 선박의 수익능력을 표시한다", answer: "순톤수" },
  { question: "해상운송 방식은 (   ), 용선계약이 있다.", answer: "개품운송" },
  { question: "용선계약은 만재화물 내지 대량화물인 경우에는 (   )에 적재한다.", answer: "부정기선" },
  { question: "항만시설 용어 중 (   )은 해안, 하안 등에 평행하게 축조된 선박의 접안을 위하여 해저로부터 수직으로 만들어진 벽이다.", answer: "안벽" },
  { question: "(   )은 선박이 접안 또는 조종을 돕기 위해 기둥이나 석조물로 이루어진 해상에 고립되어 있는 작은 물체이다.", answer: "돌핀" },
  { question: "(   )는 선박이 닻을 내리고 접안을 위해 기다리는 수역이다.", answer: "묘박지" },
  { question: "선하증권(B/L)은 화주와 선박회사 간의 해상운송계약에 의하여 선박회사가 발행하는 (   )이다.", answer: "유가증권" },
  { question: "선하증권(B/L)의 양도는 화물에 대한 (   )의 이전이다.", answer: "권리" },
  { question: "선하증권의 법적 성질은 요인중권, 대표증권, (   ) 등이 있다.", answer: "유통증권" },
  { question: "복합운송 유형 중 피기백 방식은 철도의 대차 위에 운송용 트레일러를 대량으로 적재하여 운송하는 (   )과 (   )의 (   )이다.", answer: "철도운송, 도로운송, 복합운송방식" },
  { question: "복합운송 유형 중 (   )은 도로운송수단과 해상운송수단을 혼합하여 운송하는 방식이다.", answer: "피시백 방식" },
  { question: "철도의 대차 위에 운송용 트레일러를 대량으로 적재하여 운송하는 (   )과 (   )의 (   )이다.", answer: "철도운송, 도로운송, 복합운송방식" },
  { question: "국제복합운송은 적어도 종류가 다른 2가지 이상의 운송수단에 의한 운송물의 수령지와 인도지가 다른 2국 간의 운송을 하나의 (   )으로 운송하는 것을 말한다.", answer: "운송계약" },
  { question: "국제해상운송 컨테이너는 전 세계적으로 표준화되어 운송 도중 화물의 이적 없이 (   )이 가능하다.", answer: "일관복합운송" },
  { question: "컨테이너의 종류 중 (   ), (   )가 주로 사용된다.", answer: "20ft, 40ft" },
  { question: "컨테이너 물동량의 산출을 위한 표준적인 단위는 (   )이다.", answer: "TEU" },
  { question: "컨테이너 하역방식 중 (   )방식은 본선 또는 육상에 설치된 갠트리 크레인 등의 하역장비를 이용하여 컨테이너를 상하로 들어올리거나 내리는 방식이다.", answer: "LO-LO" },
  { question: "컨테이너 하역방식 중 (   )방식은 자동차 또는 철도를 운송하는 페리선박의 하역방식이다.", answer: "RO-RO" },
  { question: "컨테이너 하역방식 중 (   )방식은 바지에 컨테이너나 일반화물을 적재하여 본석에 장착된 크레인으로 바지 자체를 적재 또는 양하는 하역방식이다.", answer: "FO-FO" },
  { question: "컨테이너 터미널은 전체 운송과정에 있어서 서로 다른 운송기관의 운송기능을 이어주는 (   )혹은 접점의 기능을 수행한다.", answer: "연결점" },
  { question: "컨테이너 터미널 시설에서 (   )은 컨테이너선이 접안하여 화물하역작업을 수행할 수 있도록 만든 구조물이다.", answer: "선석" },
  { question: "컨테이너 터미널 시설에서 (   )은 안벽에 접한 야드부분에 일정한 폭으로 나란히 뻗어 있는 공간이다.", answer: "에이프론" },
  { question: "컨테이너 터미널 시설에서 (   )은 컨테이너선에서 하역하는 컨테이너를 임시적으로내려 놓는 장소이다.", answer: "화물집화장" },
  { question: "컨테이너 터미널 시설에서 (   )은 화물이 적재된 컨테이너를 인수, 인도 보관하는 장소이다.", answer: "컨테이너 장치장" },
  { question: "(   )는 트럭 혹은 철도로 반입된 LCL화물을 보관, 분류해서 통관수속을 마친 후 FCL 화물로 만드는 작업장이다.", answer: "CFS" },
  { question: "컨테이너관련 장비중 (   ) 크레인은 컨테이너선에 컨테이너를 선적하거나 양륙하기 위한 전용 크레인이다.", answer: "갠트리" },
  { question: "컨테이너관련 장비중 (   )는 CY 내에서 트레일러를 이동하는 견인차량이다.", answer: "야드 트랙터" },
  { question: "컨테이너 하역시스템 중 새시방식은 컨테이너를 육상의 갠트리 크레인이나 선상의 크레인으로 컨테이너선에서 직접 새시 위에 컨테이너를 적재하므로 보조 (   )가 필요 없는 하역방식이다.", answer: "하역기기" },
  { question: "컨테이너 하역시스템 중 스트래들 캐리어방식은 컨테이너를 갠트리 크레인으로 에어프런에 직접 내리고 스트래들 캐리어로 (   )까지 운반하는 방식이다.", answer: "CY" },
  { question: "ICD는 항만과 거리가 먼 내륙지역에서 통관과 (   )화물의 혼재와 분류작업을 수행하기 위한 공간이다.", answer: "LCL" },
  { question: "ODCY는 부두 내에서 설치된 컨테이너 야드가 아닌 부두 밖에 설치된 공간이다.", answer: "" },
  { question: "컨테이너운송용 트레일러는 컨테이너 (   )라고 칭한다.", answer: "새시" },
  { question: "국제물류는 생산과 소비가 2개국 이상에서 이루어지는 경우 생산과 소비의 시간적, 공간적 차이를 극복하기 위하여 유형과 무형의 재화를 이동시키는 물류적인 (   )이다.", answer: "경제활동" },
  { question: "국제물류의 특성은 활동의 외부적 다양성, (   ), 운송 중개자의 개인, 문화의 영향력 등이 있다.", answer: "장거리 운송거리" },
  { question: "국제물류에서는 다양한 운송수단이 활용되는데 특히, 항공, 해상, 육상운송을 통해 운송이 이루어지고 복합운송주선인을 통한 (   )이 이루어진다.", answer: "복합운송" },
  { question: "국제물류는 장거리 운송이 이루어지기 때문에 운송과정 가운데 (   )의 기능이 중요하게 자리잡고 있다.", answer: "보관" },
  { question: "국제물류시스템의 형태 중 (   )은 수출기업에서 상품이 해외의 자회사 창고로 출하 선적되고 그 창고에서 배송되는 형태로 해외의 자회사는 창고 시스템의 역할을 한다.", answer: "고전적 시스템" },
  { question: "국제물류시스템의 형태 중 (   )은 수출기업에서 해외의 자회사 창고인 통과센터로 운송된 상품이 고객에게 배송되는 형태이다.", answer: "통과 시스템" },
  { question: "국제물류시스템의 형태 중 (   )은 수출국의 공장이나 배송센터에서 상품을 수입국의 최종 소비자나 판매점으로 직송하는 형태이다.", answer: "직송 시스템" },
  { question: "글로벌 물류 전략의 특성은 (   ), (   ), (   )이 있다.", answer: "통합성, 혁신성, 대응성" },
  { question: "국제무역은 외국무역, 세계무역, (   ) 등으로 불린다.", answer: "해외무역" },
  { question: "(   )이란 화물의 분류를 용이하게 하고 취급 시 주의 사항을 나타내기 위하여 화물의 외장에 표시하는 기호, 목적지, 주의 문구, 번호 등을 말한다.", answer: "화인" },
  { question: "INCOTERMS는 1936년에 제정되어 2020년까지 총 8차에 걸쳐 수정, 보완한 것으로, 국제무역의 대표적 (   )이다.", answer: "정형거래조건" },
  { question: "국제도로운송은 물품을 육로를 이용하여 서로 다른 국가 간의 특정 장소로 국제도로 (   )에 따라 운송하는 것을 말한다.", answer: "운송조약" },
  { question: "국제도로 운송수단으로 (   ), (   ), (   )가 있다.", answer: "일반트럭, 트레일러, 전용특장차" },
  { question: "(   )은 1956년 제네바에서 유럽국가들이 성명하여 1961년 발효되었고 1978년에 개정되었다.", answer: "국제도로운송협약" },
  { question: "국제 해상운송의 특성은 (   ), 저렴한 운송비, (   ), 자유로운 운송로, 저속성, 국제성이 있다.", answer: "대량운송, 원거리운송" },
  { question: "국제해상 운송의 (   )이란 고정된 항로 없이 수요에 따라 운항되며, 항로나 항해에 아무런 제한을 받지 않고 화물이 있는 경우 또는 화주의 요구가 있는 경우에만 화주와 용선계약을 체결하고 운송하는 선박을 말한다.", answer: "부정기선" },
  { question: "국제해상 운송의 (   )은 화물을 운송하기 위해 화주가 선박회사로부터 선복의 일부 또는 전부를 빌리는 계약이다.", answer: "용선운송계약" },
  { question: "선하증권(B/L)의 기능은 화물수령증, 운송계약의 증거, (   )이다.", answer: "권리증권" },
  { question: "복합운송은 해상운송과 육상운송을 결합한 (   )과 해상운송과 항공운송을 결합한 (   )이 있다.", answer: "해륙복합운송, 해공복합운송" },
  { question: "복합운송은 대륙과 해상을 잇는 교량역할을 하는 (   ) 방식이 되고 있다.", answer: "래드브리지" },
  { question: "(   )은 복합운송계약에 따라 복합운송인이 자신의 관리하에 물품을 수취하였다는 것과 그 계약내용에 따라 운송인 물품을 인도할 의무를 부담하는 것을 증명하는 증권이다.", answer: "복합운송증권" },
  { question: "(   )은 1956년 유럽경제위원회에서 제정된 것으로 컨테이너의 통합 절차를 간소화하기 위하여 당사국 간의 관세 및 통관방법 등에 대하여 규정하고 있다.", answer: "컨테이너 통관협약" },
  { question: "(   )란 관세선을 통과하는 물품에 부과하는 조세이다.", answer: "관세" },
  { question: "관세의 4대 과제 요건은 과세물건, 납세의무자, 과세표준, (   )이 있다.", answer: "관세율" },
  { question: "보세란 관세의 부과를 보류하고 있는 상태를 의미한다.", answer: "" },
  { question: "(   )는 관세법상의 제도로 보세구역제도와 보세운송제도로 구분한다.", answer: "보세제도" },
  { question: "(   )은 공익목적으로 운영되는 보세구역이다.", answer: "지정보세구역" },
  { question: "(   )은 주로 외국물품이나 통관하려는 물품의 장치, 제조가공, 전시,건설, 판매를 목적으로 사인의 신청에 의하여 주로 사인의 토지, 시설 등에 대하여 세관장이 지정한다.", answer: "특허보세구역" },
  { question: "(   )은 일정한 지역 전체를 보서구역으로 지정한 곳이다.", answer: "종합보세구역" },
  { question: "(   )는 1947년 이래 국제무역질서를 규율해 오던 관세 및 무역에 관한 일반협정을 흡수하여 통합해 세계무역질서를 세우고 우루과이라운드 협정의 이행을 감시하는 역할을 하는 국제기구이다.", answer: "세계 무역기구, WTO" },
  { question: "(   )는 상품 및 서비스 교역 등에 있어서 관세와 기타 무역장벽의 제거를 통해 체약국 간 자유무역을 실현하는 지역무역협정의 일정이다.", answer: "FTA" },
  { question: "녹색물류란 물류과정 상에서 (   )를 통해 물류자원과 에너지를 절약하고, (   )를 사용하며, 환경 친화적인 물류활동을 통하여 물류과정에서의 온실가스 배출 및 환경오염물질 발생을 최소화하는 물류활동정책을 말한다.", answer: "물류효율화, 환경 친화적인 대체재" },
  { question: "녹색물류 정책은 (   ), 청정개발체제, 온실가스배출권 거래제도 등 있다.", answer: "전환교통" },
  { question: "우리나라 물류정보시스템 중 (   )은 선박의 최초 입항보고를 시작으로 항만 내 시설사용, 관제사항, 화물입출항, 세입징수, 출항보고까지 모선별로 모든 항만운영 관련 정보를 관리하는 시스템을 말한다.", answer: "항만운영전산망" },
  { question: "(   )은 국제물류정보화를 위해 1994년 설립된 항만물류정보화 전문기업으로 전자문서중계서비스 등 물류정보화에 필요한 종합물류정보망을 구축하고 있다.", answer: "KL-Net" },
  { question: "(   )은 화물운송, 차량열차운용, 운송정보, 고객지원시스템으로 구성되며 화물운송업무의 전산화를 위한 시스템이다.", answer: "철도전상망 시스템" },
  { question: "물류정보는 (   )를 효율적으로 수행하기 위해 운송, 보관, 하역, 포장 등 물류활동을 수행하는 과정에서 축적되고 조합되어 정리된 자료를 말한다.", answer: "물류관리" },
  { question: "물류정보시스템에서 (   )은 전사적자원관리 등 운영 시스템에서 제공하는 생산, 구매, 판매, 제고 데이터를 바탕으로 수요를 예측하고, 자재 소요, 생산, 마케팅, 판매를 계획하는 시스템이다.", answer: "공급망 계획 시스템" },
  { question: "(   )는 판매 시점에 실시간으로 수집한 판매 상품 정보, 구매 고개 정보, 대금 지급 정보를 발주, 생산, 재고 등에 활용하는 시스템이다.", answer: "POS" },
  { question: "(   )은 유통에서 판매 현황에 따라 재고가 일정 수준에 도달하면 자동으로 필요한 만큼 발주하는 시스템을 말한다.", answer: "자동발주시스템" },
  { question: "(   )는 물류센터의 랙이나 보관 구역에 점등 장치를 달아서 피킹할 화물이 보관된 지역과 피킹할 수량을 알려 줄 수 있다.", answer: "DPS" },
  { question: "(   )는 피킹한 상품을 포장할 장소에 두고 출고지별 상자에 다수의 상품을 투입할 때 투입할 상품의 품목과 수량을 지시해 줌으로써 정확한 수량을 상자에 담을 수 있도록 지원하는 시스템이다.", answer: "DAS" },
  { question: "(   )는 부피가 작은 제품을 점포나 카테고리별로 분류하는 시스템이다.", answer: "PAS" },
  { question: "운송의 3대 요수 중 (   )는 도로, 철도, 해상로 등 운송수단이 이용하는 통로나 운송로이다.", answer: "운송 경로" },
  { question: "운송의 3대 요수 중 (   )은 전 구간의 화물운송을 상호간의 중계 및 운송화물의 환적작업들이 이루어지는 장소이다.", answer: "운송 연결점" },
  { question: "수송은 선박, 철도, 트럭 등을 이용한 거점 간의 (   )이다.", answer: "간선운송" },
  { question: "배송은 트럭 등을 이용해 거점에서 수화인에게 전달하는 (   )이다.", answer: "지선운송" }
];

let currentIndex = 0;
let score = 0;
let currentQuestions = [];
let incorrectQuestions = [];

// 2. 모드 선택
document.getElementById('order-mode').onclick = () => startQuiz('order');
document.getElementById('random-mode').onclick = () => startQuiz('random');

function shuffle(array) {
  return array.sort(() => Math.random() - 0.5);
}

function startQuiz(mode) {
  document.querySelector('.mode-select').style.display = 'none';
  document.querySelector('.quiz').style.display = '';
  document.querySelector('.result').style.display = 'none';
  score = 0;
  currentIndex = 0;
  incorrectQuestions = [];
  currentQuestions = mode === 'random' ? shuffle([...questions]) : [...questions];
  showQuestion();
}

function showQuestion() {
  if (currentIndex >= currentQuestions.length) {
    showResult();
    return;
  }
  const q = currentQuestions[currentIndex];
  document.getElementById('question').textContent = `${currentIndex + 1}. ${q.question}`;
  document.getElementById('answer-input').value = '';
  document.getElementById('feedback').textContent = '';
  document.getElementById('next-btn').style.display = 'none';
  document.getElementById('answer-input').focus();
}

// 답 제출 함수
function submitAnswer() {
  const userAnswer = document.getElementById('answer-input').value.trim();
  const correctAnswer = currentQuestions[currentIndex].answer;
  if (userAnswer === correctAnswer) {
    score++;
    document.getElementById('feedback').textContent = '정답입니다!';
    document.getElementById('feedback').style.color = 'green';
  } else {
    document.getElementById('feedback').textContent = `오답입니다. 정답: ${correctAnswer}`;
    document.getElementById('feedback').style.color = 'red';
    incorrectQuestions.push(currentQuestions[currentIndex]);
  }
  document.getElementById('next-btn').style.display = '';
  document.getElementById('answer-input').focus();
}

// 제출 버튼 클릭 시
document.getElementById('submit-btn').onclick = () => {
  // 이미 피드백이 있으면(즉, 이미 제출했다면) 무시
  if (document.getElementById('next-btn').style.display !== 'none') return;
  submitAnswer();
};

// 다음 문제 버튼 클릭 시
document.getElementById('next-btn').onclick = () => {
  currentIndex++;
  showQuestion();
};

// 입력창에서 엔터(PC)/이동(모바일) 누르면 제출 또는 다음 문제로 이동
document.getElementById('answer-input').addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    // 아직 제출 안 했으면 제출
    if (document.getElementById('next-btn').style.display === 'none') {
      submitAnswer();
    } else {
      // 이미 제출한 상태면 다음 문제로 이동
      document.getElementById('next-btn').click();
    }
  }
});

function showResult() {
  document.querySelector('.quiz').style.display = 'none';
  document.querySelector('.result').style.display = '';
  document.getElementById('score').textContent = `점수: ${score} / ${currentQuestions.length}`;
  if (incorrectQuestions.length > 0) {
    document.getElementById('retry-wrong-btn').style.display = '';
  } else {
    document.getElementById('retry-wrong-btn').style.display = 'none';
  }
}

// 오답 다시 풀기
document.getElementById('retry-wrong-btn').onclick = () => {
  if (incorrectQuestions.length === 0) return;
  currentQuestions = [...incorrectQuestions];
  incorrectQuestions = [];
  currentIndex = 0;
  score = 0;
  document.querySelector('.result').style.display = 'none';
  document.querySelector('.quiz').style.display = '';
  showQuestion();
};

// 처음부터 다시 풀기
document.getElementById('restart-btn').onclick = () => {
  document.querySelector('.mode-select').style.display = '';
  document.querySelector('.result').style.display = 'none';
};