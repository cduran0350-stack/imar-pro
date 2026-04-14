// =============================================
// ANTALYA İLÇE VE MAHALLE/KÖY VERİTABANI
// TKGM Parsel Sorgu Uygulaması ile uyumlu resmi kadastral veriler
// =============================================
const antalyaData = {
    "AKSEKİ": ["AKPINAR","ALTINYAYLA","BAĞLICA","BALCILAR","BELKAYA","BOYALI","CEMALLER","ÇATALOLUK","ÇATDIR","ÇENGER","ÇEVLİK","DEMİRCİLER","DEREKÖY","DİKİLİTAŞ","DÜZLER","EĞRİDERE","GEDİKEVLER","GİDENGELMEZ","HACIMAHMUTLU","KARACAÖREN","KIZILYAKA","KOCABAŞ","KOÇAŞ","KONAKLI","MELİKLER","OVACIK","OYUKLU","PINARALTI","SÖĞÜTÇÜK","SÜRTME","TEKELİ","TOGANLIBELEN","YAKAKÖY","YEŞİLKÖY"],
    "AKSU": ["ALTINOVA","ARAPLAR","BADEMAĞACI","BOYALIK","BÜYÜKÇIFTLIK","ÇIĞLI","DEMİRCİLER","DOĞANKÖY","DÜZLERÇAMI","ERENKÖY","FATİH","KARAÖZ","KAVAKLI","KEMERAGZI","KIZILARIK","KIZILIK","KONAKLALTI","KOVACIK","OVACIK","OYUKLU","PERGE","PINARBASI","SARIKÖY","SARISU","SEYREK","YEŞİLBAYIR","YEŞİLKÖY"],
    "ALANYA": ["AVSALLAR","BEKTAS","BEKİRLER","CİKCİLLİ","DEMİRTAŞ","ELİKESİK","HACET","HAMAXIA","KARGICAK","KESTEL","KIZILCAŞEHIR","KONAKLICE","KONAKLI","KÖSELER","MAHMUTLAR","OBA","OKURCALAR","PAYALLAR","SEKİ","TOSMUR","TÜRKLER","ÜMİT","YEŞİLÖZ"],
    "DEMRE": ["ALAKENT","BELEN","BEYMELEK","ÇAYKENARACI","GÜNEŞLİ","GÜRSES","KAPAKLI","KARADERE","KALE","KINIK","KIYIKÖY","MYRA","SÜLÜKLÜ","TEPECİK","ÜÇAĞIZ","YEŞİLKÖY"],
    "DÖŞEMEALTI": ["AKBAŞ","ALTINKAYA","AŞAĞIKARAMAN","ATATÜRK","BALIKKÖY","BUCAKŞEYLER","ÇIĞLIK","DOYRAN","İSKENDER","KARABÜK","KIŞLA","KIRKGÖZ","KOCAALILER","KURUÇAY","MİMOZA","PİRELLİ","SAĞLAM","SAĞIRIN","VARSAK","YARBAŞÇANDIR","YENİKÖY"],
    "ELMALI": ["AKÇAY","AKPINAR","ARDICLI","AVLAN","BAYINDIR","BEYKÖY","BOZYER","ÇAMKÖY","ÇANDIR","ÇUKURKÖY","DEREKÖY","DOĞANKÖY","ELMALI MERKEZ","GAVURAĞILI","GÖDENE","GÜRLEVIK","KARABAYIR","KARADİKEN","KIZILBAĞ","KIBRISÇIK","KOCAPINAR","KOZAĞAÇ","ORTAKÖY","SAĞLIK","SARILAR","SOFULAR","TEKKE","ÜZÜMLÜ","YAKAKÖY","YAZIR"],
    "FİNİKE": ["ALAKIR","ARİF","AŞAĞIKUZDERE","BEYKONAK","ÇAMALAN","ÇATALLAR","ÇUKURBAĞ","GÖYNÜK","KARAÖZ","MAVİKENT","ORTAKÖY","SAHİLKENT","TURUNÇOVA","ULUPINAR","YALINCA","YEŞİLKÖY"],
    "GAZİPAŞA": ["AHIRTAŞ","AKÇALIMAN","ALADAĞ","BAŞPINAR","BIÇAKÇI","BOSTANCI","BÜKLÜCE","DAĞPAZARI","GÖZLEK","HACET","HACILAR","KARADERE","KARATAŞ","KIZILOT","KUMLUK","MECİDİYE","NARLICA","ORTAKÖY","SARILAR","SELİMSEK","SÖĞÜTLÜDERE","TORASAN","YENİCEKENT"],
    "GÜNDOĞMUŞ": ["ALANIÇI","ALANTEPE","BAŞLAR","BOYALI","BUCAKLAR","ÇAMKÖY","ÇANDIR","DEĞİRMENÖZÜ","DEMİRLİ","GÖKBÜK","GÜZELBAĞ","IŞIKLAR","KARAKÖY","KARATAŞ","KIZILCAÖREN","KOÇAK","KUMKÖY","KUMLUK","SÖĞÜTLÜDERE","TEKELİ","YEŞİLYURT"],
    "İBRADI": ["BALCILAR","BAŞPINAR","BOZHÜYÜK","ÇAMLIK","ÇUKURCA","DAĞPAZARI","DURALİLER","ESKİKÖY","GİDENGELMEZ","GÖKBÜK","GÜZELSU","KARACAÖREN","KIZILCAÖREN","KOÇKAYA","SARIIDRIS","SORGUN","TAŞDİBİ","TOPÇAM","ÜRÜNLÜ"],
    "KAŞ": ["AKBEL","ARSAKÖY","BAYINDIR","BEZİRGAN","BOĞAZCIK","BOĞAZÇAY","ÇUKURBAĞ","DELİKKEMER","GÜRSU","HACIOGLAN","ISLAMLAR","İSKELE","KALKAN","KARAÇAY","KARAKÖY","KILINÇLI","KINIK","KORSAN","KUMLUOVA","LİMANAĞZI","OVA","ÖZLEN","PINARBASI","SARIBELEN","TAŞLIK","ÜZÜMLÜ","YEŞİLKÖY"],
    "KEMER": ["BELDİBİ","BEYCİK","CAMYUVA","ÇAMYUVA","ÇIRALI","GÖYNÜK","KEMER","KİRİŞ","KUZDERE","PHASELİS","SARIGERME","TEKİROVA","ULUPINAR","YENİKÖY"],
    "KEPEZ": ["ALTINOVA","ARAPSUYU","BAĞLIK","CAMİKEBİR","ÇAĞLAYAN","ÇAKIRLAR","DEĞİRMENÖNÜ","DOKUMA","DOYRAN","EMEK","ERMENEK","GEBİZLİ","GÖKSU","GÜNEŞ","GÜZEL OBA","HAŞİMOĞULLARI","İSMETPAŞA","KOYUNLAR","KUZEYKENT","MEMUREVLERİ","MOLLAALANI","SÜTÇÜLER","ŞİRİNYALI","TEOMANPAŞA","UNCALI","YENİMAHALLE","ZEYTİNKÖY"],
    "KONYAALTI": ["ARAPSUYU","BAHÇELİEVLER","ÇAKIRLAR","ÇAMLIBELKÜLTÜR","DOYRAN","GÜRSU","HURMA","LİMAN","SARISU","UÇANSU","UNCALI","YAYLA","ZEYTİNKÖY"],
    "KORKUTELİ": ["ALACASU","ARDICLI","ARMUTLU","AŞAĞIGÖKDERE","BAYAT","BELENTEPE","BULKAZ","ÇAMLIK","ÇAVUŞ","ÇIĞLIK","DAĞBELI","DEREKÖY","DOĞANCI","EĞRİDİR","ERİKLİ","GEBECELER","GÖMBE","GÜNDOĞAN","GÜRPINAR","HORZUM","KARAOT","KIZILKAYA","KOCAKESİK","KUYU","KORKUTELİ MERKEZ","SARILAR","SARIOT","SIKIRIKUYRUĞU","YENİKÖY"],
    "KUMLUCA": ["ADRASAN","AKÇAKAYA","AŞAĞIOVACIK","BEYKONAK","ÇAMLICA","ÇELTİKÇİ","ÇOBANISA","DENİZGİREN","DEREKÖY","ELMALIYEŞİL","GEBECELER","GÜRLEK","HACIVELILER","KARAÖZ","KAŞBELEN","KIZILCADAĞ","KOCAALAN","KUMLUCA MERKEZ","MAVİKENT","SAHİLKENT","TAHTALI","TEKİROVA","YAZIR"],
    "MANAVGAT": ["ATATÜRK","AVSALLAR","ÇALLI","ÇENGER","ÇOLAKLI","EVRENSEKİ","GÜNDOĞDU","GÜZELYALI","HOCALAR","ILHAN","KALEMLER","KUMKÖY","KUZCA","OYMAPINAR","SARILAR","SERFERPAŞa","TAŞAĞIL","TİTREYENGÖL","ÜRÜNLÜ","YAKAKÖY"],
    "MURATPAŞA": ["AKDENİZ","ALTINDAĞ","BAHÇELİEVLER","BALBEY","BARBAROS","BOSTANLI","ÇAĞLAYAN","ÇAMLIK","DEĞİRMEN","DEMİRCİKARA","DUMLUPINAR","ETİLER","FENER","GEBİZ","GÜLLÜK","GÜVENLİK","GÜZEL OBA","HAŞİMİŞCAN","HESAPÇI","KARALIO","KIŞLA","KIZILSARAY","KOCASEYİT","KULEKAPısı","LARA","MEBUSOĞLU","MEMUREVLERİ","MELTEM","MEYDAN","MURATPAŞA","ÖRNEKKÖY","SAKARYA","SELÇUK","SİNAN","ŞİRİNEVLER","ŞİRİNYALI","TAHILPAZARI","TOPÇULAR","UNCALI","VARSAK KARŞIYAKA","YEŞİLBAHÇE","YILDIZ","ZEYTİNLİK"],
    "SERİK": ["ACIPAYAM","AKBAŞ","AKKÖY","ALTINKUM","AŞAĞIKARAMAN","BELEK","BOĞAZKENT","BUCAK","ÇAYELI","DEĞİRMENÖZÜ","GEYİKBAYIRI","KADRİYE","KARASAZ","KIZILBÜK","KUMLUK","OYMAPINAR","SORGUN","TAŞAĞIL","TEPECİK","TİTREYENGÖL","YUKARIKARAMAN"]
};

function buildCustomSelect(triggerId, dropdownId, displayId, hiddenId, options, placeholder, onSelect) {
    const trigger = document.getElementById(triggerId);
    const dropdown = document.getElementById(dropdownId);
    const display = document.getElementById(displayId);
    const hidden = document.getElementById(hiddenId);

    // Build options
    dropdown.innerHTML = '';
    options.forEach(opt => {
        const div = document.createElement('div');
        div.className = 'custom-select-option';
        div.textContent = opt;
        div.addEventListener('click', () => {
            hidden.value = opt;
            display.textContent = opt;
            display.style.color = 'var(--text-main)';
            trigger.classList.remove('open');
            dropdown.classList.remove('open');
            dropdown.querySelectorAll('.custom-select-option').forEach(o => o.classList.remove('selected'));
            div.classList.add('selected');
            if (onSelect) onSelect(opt);
        });
        dropdown.appendChild(div);
    });

    trigger.addEventListener('click', (e) => {
        e.stopPropagation();
        const isOpen = trigger.classList.contains('open');
        // Close all other dropdowns
        document.querySelectorAll('.custom-select-trigger.open').forEach(t => {
            t.classList.remove('open');
            t.nextElementSibling && t.nextElementSibling.classList.remove('open');
        });
        document.querySelectorAll('.custom-select-dropdown.open').forEach(d => d.classList.remove('open'));
        if (!isOpen) {
            trigger.classList.add('open');
            dropdown.classList.add('open');
        }
    });
}

// Close dropdowns when clicking outside
document.addEventListener('click', () => {
    document.querySelectorAll('.custom-select-trigger.open').forEach(t => t.classList.remove('open'));
    document.querySelectorAll('.custom-select-dropdown.open').forEach(d => d.classList.remove('open'));
});

document.addEventListener('DOMContentLoaded', () => {
    // Initialize İlçe dropdown
    const ilceler = Object.keys(antalyaData).sort();
    buildCustomSelect('ilce-trigger', 'ilce-dropdown', 'ilce-display', 'ilce', ilceler, 'İlçe Seçiniz...', (selectedIlce) => {
        // When ilce selected, populate mahalle dropdown
        const mahalleler = antalyaData[selectedIlce] || [];
        const mahalleTrigger = document.getElementById('mahalle-trigger');
        const mahalleDisplay = document.getElementById('mahalle-display');
        const mahalleHidden = document.getElementById('mahalle');
        // Reset mahalle
        mahalleHidden.value = '';
        mahalleDisplay.textContent = 'Mahalle / Köy Seçiniz...';
        mahalleDisplay.style.color = 'var(--text-muted)';
        buildCustomSelect('mahalle-trigger', 'mahalle-dropdown', 'mahalle-display', 'mahalle', mahalleler.sort(), 'Mahalle Seçiniz...', null);
    });

    // Set initial placeholder color
    document.getElementById('ilce-display').style.color = 'var(--text-muted)';
    document.getElementById('mahalle-display').style.color = 'var(--text-muted)';


    const form = document.getElementById('imar-form');
    const calculateBtn = document.getElementById('btn-calculate');
    const analysisContent = document.getElementById('analysis-content');

    // UI Elements for results
    const resTabanAlani = document.getElementById('res-taban-alani');
    const resToplamAlan = document.getElementById('res-toplam-alan');

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        performCalculation();
    });

    function performCalculation() {
        // Collect Inputs
        const parselAlani = parseFloat(document.getElementById('parsel-alani').value);
        const taks = parseFloat(document.getElementById('taks').value) || 0;
        const kaks = parseFloat(document.getElementById('kaks').value) || 0;
        const katAdedi = parseInt(document.getElementById('kat-adedi').value) || 0;
        const hedefDaire = 100; // Standart ideal daire planlaması baz alınır
        const ekBilgiler = document.getElementById('ek-bilgiler').value;

        // Validations
        if (!parselAlani || parselAlani <= 0) {
            alert('Lütfen geçerli bir parsel alanı giriniz.');
            return;
        }

        // Core Calculations
        const tabanAlani = parselAlani * taks;
        const toplamInsaatAlani = parselAlani * kaks;
        
        let katAlani = 0;
        if (katAdedi > 0) {
            katAlani = toplamInsaatAlani / katAdedi;
        }

        // Display basic results
        if (resTabanAlani) animateValue(resTabanAlani, 0, tabanAlani, 1000);
        if (resToplamAlan) animateValue(resToplamAlan, 0, toplamInsaatAlani, 1000);

        // Generate Detailed Report
        generateReport(parselAlani, taks, kaks, katAdedi, tabanAlani, toplamInsaatAlani, katAlani, ekBilgiler, hedefDaire);
    }

    function generateReport(parsel, taks, kaks, kat, ta, tia, ka, notes, hedefDaire) {
        // Business Logic for units
        let katPlanlamasiHTML = '';
        let toplamDaireSayisi = 0;
        let netKatAlani = ka * 0.80; // %20 ortak alan kesintisi
        let katOrtakAlan = ka * 0.20;
        
        if (kat > 0 && tia > 0) {
            let katBasiDaire = Math.max(1, Math.round(netKatAlani / hedefDaire));
            let gercekDairem2 = netKatAlani / katBasiDaire;
            toplamDaireSayisi = katBasiDaire * kat;

            katPlanlamasiHTML = `
                <div class="report-section" style="margin-top: 24px;">
                    <h3><i class="fas fa-list-ol"></i> Planlanan Kat Dağılım Listesi</h3>
                    <div class="alert alert-info" style="margin-bottom: 15px;">
                        <i class="fas fa-info-circle"></i>
                        Kat başına <strong>%20 ortak alan</strong> payı (${formatNumber(katOrtakAlan)} m²) çıkarılarak net dairesel alan hesaplanmıştır.
                    </div>
            `;
            
            for(let i = 1; i <= kat; i++) {
                katPlanlamasiHTML += `
                    <div class="report-item">
                        <span>${i}. Kat:</span>
                        <span><strong class="highlight-blue">${katBasiDaire} daire</strong> ${formatNumber(gercekDairem2)}m²</span>
                    </div>
                `;
            }
            katPlanlamasiHTML += `</div>`;
        } else if (tia > 0) {
            toplamDaireSayisi = Math.floor((tia * 0.80) / hedefDaire);
        }
        
        // Check for common architectural constraints
        let warningText = '';
        if (kat > 0 && (ta * kat) < tia) {
            warningText = `<div class="alert alert-info">
                <i class="fas fa-info-circle"></i>
                <strong>Not:</strong> Girilen kat adedi ve TAKS değeri ile toplam emsal hakkının tamamı kullanılmıyor olabilir. Taban alanını artırmak veya kat sayısını optimize etmek gerekebilir.
            </div>`;
        } else if (kat > 0 && (ta * kat) > (tia * 1.1)) {
            warningText = `<div class="alert alert-warning">
                <i class="fas fa-exclamation-triangle"></i>
                <strong>Uyarı:</strong> Toplam inşaat alanı emsal değerini aşıyor olabilir. Proje aşamasında emsal dışı alanlar (balkon, yangın merdiveni v.b.) kontrol edilmelidir.
            </div>`;
        }

        const date = new Date().toLocaleDateString('tr-TR');

        // Location data
        const ilce = document.getElementById('ilce')?.value || '';
        const mahalle = document.getElementById('mahalle')?.value || '';
        const adaNo = document.getElementById('ada-no')?.value || '';
        const parselNo = document.getElementById('parsel-no')?.value || '';
        const locationLine = [ilce ? `${ilce} İlçesi` : '', mahalle, adaNo ? `Ada: ${adaNo}` : '', parselNo ? `Parsel: ${parselNo}` : ''].filter(Boolean).join(' / ');
        
        
        let html = `
            <div class="analysis-content-inner active">
                <div class="report-header">
                    <span class="report-date">Profesyonel İmar Analizi - ${date}</span>
                    ${locationLine ? `<span class="report-location"><i class="fas fa-map-marker-alt"></i> ${locationLine}</span>` : ''}
                </div>


                ${warningText}

                <div class="report-section">
                    <h3><i class="fas fa-ruler-combined"></i> Temel Yapı Parametreleri</h3>
                    <div class="report-item">
                        <span>Maksimum Taban Alanı:</span>
                        <span>${formatNumber(ta)} m²</span>
                    </div>
                    <div class="report-item">
                        <span>Toplam İnşaat Alanı (Emsal):</span>
                        <span>${formatNumber(tia)} m²</span>
                    </div>
                    <div class="report-item">
                        <span>Kat Adedi:</span>
                        <span>${kat > 0 ? kat : 'Belirtilmedi'}</span>
                    </div>
                </div>

                <div class="report-section">
                    <h3><i class="fas fa-home"></i> Genel Verimlilik Analizi</h3>
                    <div class="report-item">
                        <span>Tahmini Toplam Bağımsız Bölüm:</span>
                        <span class="highlight-green">${toplamDaireSayisi} Adet</span>
                    </div>
                    <div class="report-item">
                        <span>Toplam Bina Ortak Alanı (%20):</span>
                        <span>${formatNumber(tia * 0.20)} m²</span>
                    </div>
                    <div class="report-item">
                        <span>Bahçe / Açık Alan Payı:</span>
                        <span>${formatNumber(parsel - ta)} m²</span>
                    </div>
                </div>

                ${katPlanlamasiHTML}

                <div class="report-summary-box">
                    <h3>Profesyonel Değerlendirme</h3>
                    <p>
                        ${parsel} m² büyüklüğündeki parsel üzerinde, ${taks} TAKS ve ${kaks} KAKS değerleri baz alındığında, 
                        toplamda <strong>${formatNumber(tia)} m²</strong> inşaat hakkı bulunmaktadır. 
                        ${kat > 0 ? `Yapı ${kat} katlı olarak tasarlandığında kat başına yaklaşık <strong>${formatNumber(ka)} m²</strong> inşaat alanı düşmektedir.` : ''}
                        Piyasa standartlarına göre bu parsel üzerinde hedeflediğiniz kullanım alanlarına uygun olarak toplam <strong>${toplamDaireSayisi} adet</strong> konut/ofis birimi üretilmesi mümkündür.
                    </p>
                    ${notes ? `<div class="report-notes"><strong>Ek Notlar:</strong> ${notes}</div>` : ''}
                </div>

                <div class="legal-disclaimer">
                    <small>* Bu veriler bilgilendirme amaçlıdır. Nihai proje için ilgili belediyeden imar durumu belgesi alınmalıdır.</small>
                </div>
            </div>
        `;

        analysisContent.innerHTML = html;
        
        // Add styling for internal report elements if needed
        const styles = `
            .report-date { display: block; font-size: 13px; color: var(--text-muted); margin-bottom: 6px; border-bottom: 2px solid var(--accent); width: fit-content; padding-bottom: 4px; }
            .report-location { display: flex; align-items: center; gap: 6px; font-size: 13px; font-weight: 600; color: var(--primary); margin-bottom: 12px; margin-top: 4px; }
            .report-location i { font-size: 11px; }
            .report-section { page-break-inside: avoid; break-inside: avoid; }
            .report-summary-box { page-break-inside: avoid; break-inside: avoid; }
            .alert { padding: 12px; border-radius: 8px; margin-bottom: 20px; font-size: 14px; display: flex; gap: 10px; align-items: center; page-break-inside: avoid; break-inside: avoid; }
            .alert-info { background: #eff6ff; color: #1e40af; border: 1px solid #bfdbfe; }
            .alert-warning { background: #fffbeb; color: #92400e; border: 1px solid #fde68a; }
            .report-notes { margin-top: 15px; padding: 10px; border-top: 1px solid var(--border); font-style: italic; font-size: 14px; color: var(--text-muted); }
            .legal-disclaimer { margin-top: 25px; border-top: 1px solid var(--border); padding-top: 10px; opacity: 0.6; page-break-inside: avoid; break-inside: avoid; }
        `;
        
        if (!document.getElementById('report-styles')) {
            const styleTag = document.createElement('style');
            styleTag.id = 'report-styles';
            styleTag.innerHTML = styles;
            document.head.appendChild(styleTag);
        }
    }

    // Helper: Number Formatting
    function formatNumber(num) {
        return new Intl.NumberFormat('tr-TR', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(num);
    }

    // Helper: Animation
    function animateValue(obj, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            const current = progress * (end - start) + start;
            obj.innerHTML = formatNumber(current);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    // Save functionality
    document.getElementById('btn-save-report').addEventListener('click', () => {
        const hasReport = analysisContent.querySelector('.analysis-content-inner');
        if (!hasReport) {
            alert('Önce bir hesaplama yapmalısınız.');
            return;
        }
        
        const reports = JSON.parse(localStorage.getItem('imar_pro_reports') || '[]');
        reports.push({
            date: new Date().toISOString(),
            content: analysisContent.innerHTML,
            parsel: document.getElementById('parsel-alani').value,
            adaNo: document.getElementById('ada-no').value || '-',
            parselNo: document.getElementById('parsel-no').value || '-'
        });
        localStorage.setItem('imar_pro_reports', JSON.stringify(reports));
        alert('Rapor başarıyla tarayıcı hafızasına kaydedildi.');
        switchView('reports');
    });

    // PDF Download functionality
    const btnDownloadPdf = document.getElementById('btn-download-pdf');
    if (btnDownloadPdf) {
        btnDownloadPdf.addEventListener('click', () => {
        const content = analysisContent.innerHTML;
        const hasReport = analysisContent.querySelector('.analysis-content-inner');
        if (!hasReport) {
            alert('PDF indirmek için önce bir hesaplama yapmalısınız.');
            return;
        }

            const element = document.getElementById('analysis-content');
            const dateStr = new Date().toLocaleDateString('tr-TR').replace(/\./g, '-');
            
            const opt = {
                margin:       10,
                filename:     `ImarPRO_Analiz_Raporu_${dateStr}.pdf`,
                image:        { type: 'jpeg', quality: 0.98 },
                html2canvas:  { scale: 2, useCORS: true, logging: false },
                jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' },
                pagebreak:    { mode: 'css', avoid: ['.report-section', '.report-summary-box', '.alert', '.legal-disclaimer'] }
            };

            // Create temporary title for PDF
            const titleDiv = document.createElement('div');
            titleDiv.className = 'pdf-header-inject';
            titleDiv.style.marginBottom = '24px';
            titleDiv.style.paddingBottom = '16px';
            titleDiv.style.borderBottom = '1px solid #e2e8f0';
            titleDiv.innerHTML = `
                <h1 style="font-family: 'Outfit', sans-serif; font-size: 24px; font-weight: 600; color: #1e293b; margin: 0 0 4px 0;">Profesyonel İmar Analizi</h1>
                <p style="font-family: 'Inter', sans-serif; font-size: 14px; color: #64748b; margin: 0;">Parsel verilerini girerek otomatik hesaplama yapın.</p>
            `;
            
            element.insertBefore(titleDiv, element.firstChild);

            // Generate PDF
            const originalText = btnDownloadPdf.innerHTML;
            btnDownloadPdf.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Hazırlanıyor...';
            btnDownloadPdf.disabled = true;

            html2pdf().set(opt).from(element).save().then(() => {
                element.removeChild(titleDiv); // Cleanup title
                btnDownloadPdf.innerHTML = originalText;
                btnDownloadPdf.disabled = false;
            }).catch(err => {
                console.error("PDF oluşurken hata:", err);
                if (element.contains(titleDiv)) element.removeChild(titleDiv);
                btnDownloadPdf.innerHTML = originalText;
                btnDownloadPdf.disabled = false;
                alert("PDF oluşturulurken bir hata meydana geldi.");
            });
        });
    }

    // View Management & Saved Reports
    const navCalc = document.getElementById('nav-calculator');
    const navReports = document.getElementById('nav-reports');
    const viewCalc = document.getElementById('view-calculator');
    const viewReports = document.getElementById('view-reports');
    const pageTitle = document.getElementById('page-title');
    const pageSubtitle = document.getElementById('page-subtitle');
    const headerActions = document.getElementById('header-actions-main');

    function switchView(view) {
        if (view === 'calculator') {
            navCalc.classList.add('active');
            navReports.classList.remove('active');
            viewCalc.style.display = 'grid';
            viewReports.style.display = 'none';
            pageTitle.innerText = 'Profesyonel İmar Analizi';
            pageSubtitle.innerText = 'Parsel verilerini girerek otomatik hesaplama yapın.';
            headerActions.style.display = 'flex';
        } else if (view === 'reports') {
            navReports.classList.add('active');
            navCalc.classList.remove('active');
            viewReports.style.display = 'grid';
            viewCalc.style.display = 'none';
            pageTitle.innerText = 'Kayıtlı Raporlar';
            pageSubtitle.innerText = 'Geçmiş analizlerinizi görüntüleyin ve yazdırın.';
            headerActions.style.display = 'none';
            loadReports();
        }
    }

    navCalc.addEventListener('click', (e) => { e.preventDefault(); switchView('calculator'); });
    navReports.addEventListener('click', (e) => { e.preventDefault(); switchView('reports'); });

    function loadReports() {
        const reports = JSON.parse(localStorage.getItem('imar_pro_reports') || '[]');
        if (reports.length === 0) {
            viewReports.innerHTML = `
                <div class="empty-state" style="grid-column: 1/-1;">
                    <i class="fas fa-folder-open"></i>
                    <p>Henüz kaydedilmiş bir analiz raporu bulunmuyor.</p>
                </div>
            `;
            return;
        }

        viewReports.innerHTML = '';
        
        reports.forEach((report, index) => {
            const d = new Date(report.date);
            const formattedDate = d.toLocaleString('tr-TR', { day: '2-digit', month: '2-digit', year: 'numeric', hour: '2-digit', minute:'2-digit' });

            const card = document.createElement('div');
            card.className = 'report-history-card';
            
            // Generate display string for Ada/Parsel
            let locationInfo = `Ada: ${report.adaNo || '-'} / Parsel: ${report.parselNo || '-'}`;
            if (!report.adaNo && !report.parselNo) {
                locationInfo = `Parsel Büyüklüğü: ${report.parsel} m²`;
            }

            card.innerHTML = `
                <div class="rh-header">
                    <span class="rh-badge"><i class="fas fa-check-circle"></i> Tamamlandı</span>
                    <span class="rh-date">${formattedDate}</span>
                </div>
                <div class="rh-body">
                    <h4>İmar Analiz Raporu</h4>
                    <p><strong>${locationInfo}</strong></p>
                </div>
                <div class="rh-actions">
                    <button class="btn btn-sm btn-view" data-idx="${index}">
                        <i class="fas fa-eye"></i> Görüntüle
                    </button>
                    <button class="btn btn-sm btn-danger" data-idx="${index}">
                        <i class="fas fa-trash"></i> Sil
                    </button>
                </div>
            `;
            viewReports.insertBefore(card, viewReports.firstChild);
        });

        document.querySelectorAll('.btn-view').forEach(btn => {
            btn.addEventListener('click', (e) => {
                const idx = e.currentTarget.getAttribute('data-idx');
                const allReports = JSON.parse(localStorage.getItem('imar_pro_reports') || '[]');
                analysisContent.innerHTML = allReports[idx].content;
                document.getElementById('parsel-alani').value = allReports[idx].parsel || '';
                document.getElementById('ada-no').value = allReports[idx].adaNo || '';
                document.getElementById('parsel-no').value = allReports[idx].parselNo || '';
                
                switchView('calculator');
                window.scrollTo({ top: 0, behavior: 'smooth' });
            });
        });

        document.querySelectorAll('.btn-danger').forEach(btn => {
            btn.addEventListener('click', (e) => {
                if(confirm('Kayıtlı raporu silmek istediğinize emin misiniz?')) {
                    const idx = e.currentTarget.getAttribute('data-idx');
                    const allReports = JSON.parse(localStorage.getItem('imar_pro_reports') || '[]');
                    allReports.splice(idx, 1);
                    localStorage.setItem('imar_pro_reports', JSON.stringify(allReports));
                    loadReports();
                }
            });
        });
    }

});
