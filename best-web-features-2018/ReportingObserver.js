import JSONFormatter from 'json-formatter-js';

const observer = new ReportingObserver((reports, observer) => {
	for (const report of reports) {
		document.querySelector("#console").append(
			new JSONFormatter({
				type: report.type, url: report.url, body: {
					message: report.body.message,
					lineNumber: report.body.lineNumber,
					columnNumber: report.body.columnNumber,
					sourceFile: report.body.sourceFile,
					anticipatedRemoval: JSON.stringify(report.body.anticipatedRemoval)
				}
			}, 3).render());
	}
}, {buffered: true});

export function startObserve() {
	observer.observe();
}

export function stopObserve() {
	observer.disconnect();
}