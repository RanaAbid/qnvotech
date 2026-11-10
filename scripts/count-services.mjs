import { serviceCatalog } from "../content/services.ts";

function wc(text) {
  return (text.match(/[A-Za-z0-9']+/g) || []).length;
}

function serviceWords(service) {
  let total = wc(service.h1) + wc(service.summary) + wc(service.problem) + wc(service.audience) + wc(service.description);
  for (const item of service.deliverables) total += wc(item);
  for (const item of service.approach) total += wc(item);
  for (const item of service.process) total += wc(item);
  for (const item of service.technologies) total += wc(item);
  for (const faq of service.faqs) total += wc(faq.question) + wc(faq.answer);
  return total;
}

for (const service of serviceCatalog) {
  console.log(`${service.slug}\t${serviceWords(service)}\tfaqs=${service.faqs.length}`);
}
