document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('imar-form');
    const calculateBtn = document.getElementById('btn-calculate');
    const analysisContent = document.getElementById('analysis-content');

    // UI Elements for results
    const resTabanAlani = document.getElementById('res-taban-alani');
    const resToplamAlan = document.getElementById('res-toplam-alan');

    calculateBtn.addEventListener('click', performCalculation);

    function performCalculation() {
        // Collect Inputs
        const parselAlani = parseFloat(document.getElementById('parsel-alani').value);
        const taks = parseFloat(document.getElementById('taks').value) || 0;
        const kaks = parseFloat(document.getElementById('kaks').value) || 0;
        const katAdedi = parseInt(document.getElementById('kat-adedi').value) || 0;
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
        animateValue(resTabanAlani, 0, tabanAlani, 1000);
        animateValue(resToplamAlan, 0, toplamInsaatAlani, 1000);

        // Generate Detailed Report
        generateReport(parselAlani, taks, kaks, katAdedi, tabanAlani, toplamInsaatAlani, katAlani, ekBilgiler);
    }

    function generateReport(parsel, taks, kaks, kat, ta, tia, ka, notes) {
        // Business Logic for units
        const ortalamaDaire = 120; // m2
        const tahminiDaireSayisi = Math.floor((tia * 0.85) / ortalamaDaire); // %15 common area deduction
        
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
        
        let html = `
            <div class="analysis-content-inner active">
                <div class="report-header">
                    <span class="report-date">${date} - Teknik Analiz Özeti</span>
                </div>

                ${warningText}

                <div class="report-section">
                    <h3><i class="fas fa-ruler-combined"></i> Temal Yapı Parametreleri</h3>
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
                    <h3><i class="fas fa-home"></i> Kullanım ve Verimlilik Analizi</h3>
                    <div class="report-item">
                        <span>Daire Başına Tahmini Alan:</span>
                        <span>120 m² (Brüt)</span>
                    </div>
                    <div class="report-item">
                        <span>Tahmini Bağımsız Bölüm Sayısı:</span>
                        <span class="highlight-green">${tahminiDaireSayisi} Adet</span>
                    </div>
                    <div class="report-item">
                        <span>Bahçe / Açık Alan Payı:</span>
                        <span>${formatNumber(parsel - ta)} m²</span>
                    </div>
                </div>

                <div class="report-summary-box">
                    <h3>Profesyonel Değerlendirme</h3>
                    <p>
                        ${parsel} m² büyüklüğündeki parsel üzerinde, ${taks} TAKS ve ${kaks} KAKS değerleri baz alındığında, 
                        toplamda <strong>${formatNumber(tia)} m²</strong> inşaat hakkı bulunmaktadır. 
                        ${kat > 0 ? `Yapı ${kat} katlı olarak tasarlandığında kat başına yaklaşık <strong>${formatNumber(ka)} m²</strong> inşaat alanı düşmektedir.` : ''}
                        Piyasa standartlarına göre bu parsel üzerinde ortalama <strong>${tahminiDaireSayisi} adet</strong> konut/ofis birimi üretilmesi mümkündür.
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
            .report-date { display: block; font-size: 13px; color: var(--text-muted); margin-bottom: 10px; border-bottom: 2px solid var(--accent); width: fit-content; padding-bottom: 4px; }
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
        const content = analysisContent.innerHTML;
        if (content.includes('empty-state')) {
            alert('Önce bir hesaplama yapmalısınız.');
            return;
        }
        
        const reports = JSON.parse(localStorage.getItem('imar_pro_reports') || '[]');
        reports.push({
            date: new Date().toISOString(),
            content: content,
            parsel: document.getElementById('parsel-alani').value
        });
        localStorage.setItem('imar_pro_reports', JSON.stringify(reports));
        alert('Rapor başarıyla tarayıcı hafızasına kaydedildi.');
    });
});
