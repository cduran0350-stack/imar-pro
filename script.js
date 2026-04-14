// =============================================
// ANTALYA İLÇE VE MAHALLE VERİTABANI
// =============================================
const antalyaData = {
    "Aksu": ["Altınova","Büyükçiftlik","Çiğli","Demirciler","Doğanköy","Düzlerçamı","Erenköy","Karaöz","Kavaklı","Kemerağzı","Kızıldağ","Kovanlık","Oyuklu","Perge","Pinarbasi","Sarısu","Seyrek","Yeşilbayır","Yeşilköy"],
    "Alanya": ["Avsallar","Bektaş","Cikcilli","Demirtaş","Elikesik","Kargıcak","Kızılcaşehir","Mahmutlar","Muratpaşa","Oba","Okurcalar","Payallar","Seki","Tosmur","Türkler","Ümit","Yeşilöz","Hacet","Konaklı","Kestel"],
    "Demre": ["Alakent","Belen","Beymelek","Çaykenarı","Gürses","Kapaklı","Karadere","Kınık","Kıyıköy","Myra","Sülüklü","Tepecik","Üçağız","Yeşilköy"],
    "Döşemealtı": ["Akbaş","Altınkaya","Antalya","Aşağıkaraman","Atatürk","Balıkköy","Bucakşeyler","Çığlık","Doyran","İskender","Karabük","Kırkgöz","Kocaaliler","Kuruçay","Mimoza","Pirelli","Sağırin","Varsak","Yarbaşçandır"],
    "Elmalı": ["Akçay","Akpınar","Ardıçkaya","Avlan","Bayındır","Beyköy","Bozyer","Çamköy","Çandır","Çukurköy","Dereköy","Doğanköy","Elmalı Merkez","Gavurağılı","Gödene","Gürlevik","Karabayır","Karadiken","Kızılbağ","Kıbrısçık","Kocapınar","Kozağaç","Kumluca","Ortaköy","Sarılar","Sofular","Tekke","Üzümlü","Yakaköy"],
    "Finike": ["Alakır","Arif","Aşağıkuzdere","Beykonak","Çamalan","Çatallar","Çukurbağ","Göynük","Karaöz","Kumluca","Mavikent","Ortaköy","Sahilkent","Sahilköy","Turunçova","Ulupınar","Yalınca"],
    "Gazipaşa": ["Ahırtaş","Akçalıman","Aladağ","Alanya","Başpınar","Bıçakçı","Boğazkent","Bostancı","Büklüce","Gözlek","Gündüz","Hacılar","Karadere","Karataş","Kızılot","Kumluk","Mecidiye","Narlıca","Ortaköy","Sarılar","Selimsek","Söğütlüdere","Torasan","Yenicekent","Ziyaretçiler"],
    "Gündoğmuş": ["Akçay","Alanya","Alaçat","Bağlıca","Başlar","Boyalı","Bucaklar","Çamköy","Çandır","Değirmenözü","Demirli","Gökbük","Güzelbağ","Işıklar","Karaköy","Karataş","Kızılcaören","Kızılot","Koçak","Kumköy","Kumluk","Söğütlüdere","Tekeli","Yeşilyurt"],
    "İbradı": ["Balcılar","Başpınar","Bozhüyük","Çamlık","Çukurca","Dağpazarı","Duraliler","Eskiköy","Gidengelmez","Gökbük","Güzelsu","Karacaören","Kızılcaören","Koçkaya","Sarıidris","Sorgun","Taşdibi","Topçam","Ürünlü"],
    "Kaş": ["Akbel","Arsaköy","Bayındır","Bezirgan","Boğazcık","Boğazçay","Çukurbağ","Delikkemer","Gürsu","Hacıoglan","İslamlar","İskele","Kalkan","Karaçay","Karaköy","Kılınçlı","Kınık","Korsan","Kumluova","Limanağzı","Ova","Özlen","Pınarbaşı","Sarıbelen","Taşlık","Üzümlü","Yeşilköy"],
    "Kemer": ["Beldibi","Beycik","Camyuva","Çamyuva","Çıralı","Göynük","Kemer Merkez","Kiriş","Kuzdere","Phaselis","Sarıgerme","Tekirova","Ulupınar","Yeniköy"],
    "Kepez": ["Altınova","Arapsuyu","Bağlık","Camikebir","Çağlayan","Çakırlar","Değirmenönü","Dokuma","Doyran","Emek","Ermenek","Gebizli","Göksu","Güneş","Güzeloba","Haşimoğulları","Koyunlar","Kuzeykent","Memurevleri","Mollaalanı","Sütçüler","Şirinyalı","Uncalı","Yenimahalle","Zeytinköy"],
    "Konyaaltı": ["Arapsuyu","Bahçelievler","Çakırlar","Çamlıbel","Doyran","Gürsu","Hurma","Liman","Sarısu","Uçansu","Uncalı","Yayla","Zeytinköy"],
    "Korkuteli": ["Alacasu","Ardıçlı","Armutlu","Aşağıgökdere","Bayat","Belentepe","Bulkaz","Çamlık","Çavuş","Çığlık","Dağbeli","Dereköy","Doğancı","Eğridir","Erikli","Gebeceler","Gömbe","Gündoğan","Gürpınar","Horzum","Karaot","Kızılkaya","Kocabaş","Korkuteli Merkez","Kuyu","Sarılar","Sarıot","Sığırkuyruğu","Yeniköy"],
    "Kumluca": ["Adrasan","Akçakaya","Aşağıovacık","Beykonak","Çamlıca","Çeltikçi","Çobanisa","Denizgiren","Dereköy","Elmalıyurt","Gebeceler","Gürlek","Hacıveliler","Karaöz","Kaşbelen","Kızılcadağ","Kocaalan","Kumluca Merkez","Mavikent","Sahilkent","Tahtalı","Tekirova","Yazır"],
    "Manavgat": ["Atatürk","Avsallar","Çallı","Çenger","Çolaklı","Evrenseki","Gündoğdu","Güzelyalı","Hocalar","İlhan","Kalemler","Kumköy","Kuzca","Merkez","Oymapınar","Sarılar","Seferpaşa","Taşağıl","Titreyengöl","Ürünlü","Yakaköy","Yenimahalle"],
    "Muratpaşa": ["Balbey","Barbaros","Çağlayan","Değirmen","Demircikara","Dumlupınar","Fener","Güllük","Haşimişcan","Hesapçı","Kışla","Kızılsaray","Koca Seyit","Kulekapı","Lara","Memurevleri","Meltem","Muratpaşa","Örnekköy","Selçuk","Sinan","Sultan Bulvarı","Şirinevler","Şirinyalı","Tahılpazarı","Topçular","Uncalı","Varsak","Yeşilbahçe","Zeytinlik"],
    "Serik": ["Acıpayam","Akbaş","Akköy","Altınkum","Aşağıkaraman","Belek","Boğazkent","Bucak","Çayeli","Değirmenözü","Geyikbayırı","Kadriye","Karasaz","Kızılbük","Kumluk","Manavgat","Oymapınar","Sorgun","Taşağıl","Tepecik","Titreyengöl","Yukarıkaraman"],
    "Akseki": ["Akpınar","Belkaya","Beykonak","Birler","Bulkaz","Çamlıca","Çataloluk","Çenger","Çevlik","Dereköy","Dikilitaş","Düzler","Eğridir","Gökbük","Gücük","Güneykaya","Gündoğan","İyidere","Karataş","Kızılcaören","Kocabaş","Meydan","Oyuklu","Sürtme","Tekeli","Yakaköy","Yeşilköy"]
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
            .alert { padding: 12px; border-radius: 8px; margin-bottom: 20px; font-size: 14px; display: flex; gap: 10px; align-items: center; }
            .alert-info { background: #eff6ff; color: #1e40af; border: 1px solid #bfdbfe; }
            .alert-warning { background: #fffbeb; color: #92400e; border: 1px solid #fde68a; }
            .report-notes { margin-top: 15px; padding: 10px; border-top: 1px solid var(--border); font-style: italic; font-size: 14px; color: var(--text-muted); }
            .legal-disclaimer { margin-top: 25px; border-top: 1px solid var(--border); padding-top: 10px; opacity: 0.6; }
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
            parsel: document.getElementById('parsel-alani').value
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
                jsPDF:        { unit: 'mm', format: 'a4', orientation: 'portrait' }
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
            card.innerHTML = `
                <div class="rh-header">
                    <span class="rh-badge"><i class="fas fa-check-circle"></i> Tamamlandı</span>
                    <span class="rh-date">${formattedDate}</span>
                </div>
                <div class="rh-body">
                    <h4>İmar Analiz Raporu</h4>
                    <p>Parsel Büyüklüğü: <strong>${report.parsel} m²</strong></p>
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
