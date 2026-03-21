'use client';
import HireDeveloperPage from '../_components/HireDeveloperPage';

export default function QaEngineersPageClient() {
  return (
    <HireDeveloperPage
      technology="QA"
      breadcrumbLabel="QA Engineers"
      tagline="QA & Test Automation"
      description="Pre-vetted senior QA engineers ready to join your team in 48 hours. Ship bug-free software with engineers who have built test automation frameworks, run 150+ QA programs, and integrate quality into every sprint."
      stats={[
        { value: '45+', label: 'QA Engineers' },
        { value: '6+ Yrs', label: 'Avg Experience' },
        { value: '150+', label: 'QA Programs Run' },
        { value: '48hrs', label: 'Start Time' },
      ]}
      whyHire={[
        { icon: '\u2705', title: 'Vetted QA Experts', desc: 'Every QA engineer passes our 5-stage vetting: test strategy design challenge, automation framework assessment, live bug investigation session, culture fit, and reference checks. Only the top 3% qualify.' },
        { icon: '\u{1F30D}', title: 'Timezone-Aligned', desc: 'Our QA engineers work in your timezone. Whether you are in New York, San Francisco, London, or Dubai, your engineer is online when you are — ensuring bugs are caught in your sprint cycle.' },
        { icon: '\u{1F512}', title: 'NDA From Day 1', desc: 'Your codebase and test data are protected before any discussion begins. Enforceable NDAs and data protection agreements are standard on every engagement.' },
        { icon: '\u26A1', title: 'Shift-Left Quality', desc: 'Our QA engineers embed quality from the start — writing test plans during design, automating in the CI/CD pipeline, and catching defects before they reach production.' },
        { icon: '\u{1F4B0}', title: '40-60% Cost Savings', desc: 'Get senior QA engineers at a fraction of US in-house costs. No recruitment fees, no benefits overhead, no office space required.' },
        { icon: '\u{1F504}', title: 'Seamless Integration', desc: 'Your QA engineer integrates into your existing tools — GitHub, Jira, Slack, TestRail, BrowserStack. They follow your testing standards and release workflow from day one.' },
      ]}
      profiles={[
        { id: 'Q1', role: 'Senior Test Automation Engineer', experience: '8 years experience', skills: ['Selenium', 'Cypress', 'Playwright', 'TypeScript', 'CI/CD', 'Docker'], projects: '40+ automation frameworks built', availability: 'Available Now' },
        { id: 'Q2', role: 'QA Lead / SDET', experience: '9 years experience', skills: ['Java', 'TestNG', 'Appium', 'REST Assured', 'Jenkins', 'AWS Device Farm'], projects: 'Led QA teams of 6-10 engineers', availability: 'Available Now' },
        { id: 'Q3', role: 'Performance & Load Test Engineer', experience: '7 years experience', skills: ['JMeter', 'Gatling', 'k6', 'Grafana', 'New Relic', 'AWS'], projects: '25+ performance audits completed', availability: 'Available in 1 week' },
        { id: 'Q4', role: 'Mobile QA Engineer', experience: '6 years experience', skills: ['Appium', 'XCUITest', 'Espresso', 'BrowserStack', 'Detox', 'Fastlane'], projects: '30+ mobile apps tested', availability: 'Available Now' },
      ]}
      techCategories={[
        { label: 'Web Automation', chips: ['Selenium', 'Cypress', 'Playwright', 'Puppeteer', 'WebdriverIO', 'TestCafe'] },
        { label: 'Mobile Testing', chips: ['Appium', 'XCUITest', 'Espresso', 'Detox', 'BrowserStack', 'AWS Device Farm'] },
        { label: 'API Testing', chips: ['REST Assured', 'Postman', 'Karate', 'Supertest', 'GraphQL Testing', 'Contract Testing'] },
        { label: 'Performance Testing', chips: ['JMeter', 'Gatling', 'k6', 'Locust', 'Artillery', 'Lighthouse'] },
        { label: 'CI/CD Integration', chips: ['GitHub Actions', 'Jenkins', 'GitLab CI', 'CircleCI', 'Docker', 'Kubernetes'] },
        { label: 'Test Management', chips: ['TestRail', 'Zephyr', 'qTest', 'Allure Reports', 'Xray', 'Azure DevOps'] },
      ]}
      faqs={[
        { q: 'How quickly can I hire a QA engineer from Codazz?', a: 'You can interview pre-matched QA engineers within 24 hours of sharing your requirements. Onboarding typically completes within 48 hours, so your new QA engineer can start testing immediately.' },
        { q: 'What is the experience level of your QA engineers?', a: 'Our QA engineers have a minimum of 4 years of professional experience in software testing. Most have 6-10+ years with test automation frameworks like Selenium, Cypress, Playwright, and performance testing tools.' },
        { q: 'Can your QA engineers work in my timezone?', a: 'Yes. We have QA engineers across multiple time zones who can align with US, European, Middle Eastern, and APAC business hours. Your engineer will be online during your working hours.' },
        { q: 'What is the pricing for hiring a QA engineer?', a: 'Our QA engineers start at $25/hr for mid-level and $35-45/hr for senior and lead engineers. Transparent pricing with no hidden fees, recruitment charges, or long-term lock-in.' },
        { q: 'Do your QA engineers handle both manual and automated testing?', a: 'Yes. Our QA engineers are skilled in both manual exploratory testing and building robust automation frameworks. They create comprehensive test strategies covering unit, integration, E2E, performance, and security testing.' },
        { q: 'Can I scale the team up or down?', a: 'Yes. Our engagement models are fully flexible. Add more QA engineers as your testing needs grow or scale down when a milestone is complete. No long-term contracts required.' },
      ]}
      startingRate="$25"
    />
  );
}
