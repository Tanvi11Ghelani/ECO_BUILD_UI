import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "../css/faq.css";
const FAQ = () => {
    const { t } = useTranslation();
    const [faqs, setFaqs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        // Load static FAQ data with i18n keys
        loadStaticFaqs();
    }, []);

    const loadStaticFaqs = () => {
        // Static FAQ data matching your images
        const staticFaqs = [
            // Introduction To NUDURA (ICF) - Questions 1-5
            {
                id: 1,
                category: "introduction_to_nudura",
                categoryTitle: t("introduction_to_nudura"),
                questions: [
                    { id: 1, question: t("faq.what_is_nudura.question"), answer: t("faq.what_is_nudura.answer") },
                    { id: 2, question: t("faq.how_is_nudura_different.question"), answer: t("faq.how_is_nudura_different.answer") },
                    { id: 3, question: t("faq.is_nudura_widespread.question"), answer: t("faq.is_nudura_widespread.answer") },
                    { id: 4, question: t("faq.is_this_green_construction.question"), answer: t("faq.is_this_green_construction.answer") },
                    { id: 5, question: t("faq.is_it_possible_to_build_in_israel.question"), answer: t("faq.is_it_possible_to_build_in_israel.answer") }
                ]
            },
            // Structural Strength And Safety - Questions 6-10
            {
                id: 2,
                category: "structural_strength_and_safety",
                categoryTitle: t("structural_strength_and_safety"),
                questions: [
                    { id: 6, question: t("faq.are_nudura_walls_stronger.question"), answer: t("faq.are_nudura_walls_stronger.answer") },
                    { id: 7, question: t("faq.can_nudura_replace_mmd.question"), answer: t("faq.can_nudura_replace_mmd.answer") },
                    { id: 8, question: t("faq.are_nudura_walls_explosion_proof.question"), answer: t("faq.are_nudura_walls_explosion_proof.answer") },
                    { id: 9, question: t("faq.can_nudura_be_used_military.question"), answer: t("faq.can_nudura_be_used_military.answer") },
                    { id: 10, question: t("faq.are_walls_breakable.question"), answer: t("faq.are_walls_breakable.answer") }
                ]
            }
        ];
        setFaqs(staticFaqs);
        setLoading(false);
    };

    const handleSearch = () => {
        console.log("Search:", searchText);
        // Implement search functionality if needed
    };

    return (
        <div>
            <div className="container">
                <div className="breadcrumb-band">
                    <div className="text-band">
                        <span>{t('frequently_asked_questions')}</span>
                        <h2>{t('building_homes_also_for_the_generations_to_come')}</h2>
                    </div>
                </div>
            </div>

            <section>
                <div className="container">
                    <div className="search-penal bg-penal adv-search-peanl">
                        <div className="left-penal">
                            <div className="form-group">
                                <i className="fa-solid fa-magnifying-glass"></i>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    placeholder={t('search_advanced')}
                                    value={searchText}
                                    onChange={(e) => setSearchText(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="right-penal">
                            <a className="btn-primary" onClick={handleSearch}>
                                {t('search')}
                                <i className="fa-solid fa-magnifying-glass"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* First Category: Introduction To NUDURA (ICF) */}
            <section className="pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="layer_content p-0">
                                {faqs.length > 0 && faqs[0] && (
                                    <>
                                        <h3 className="text-primary">{faqs[0].categoryTitle}</h3>
                                        {faqs[0].questions.map((item) => (
                                            <div key={item.id}>
                                                <h6 className="mb-0 mt-3 mb-3 font-bg-700">
                                                    {item.id}. {item.question}
                                                </h6>
                                                <div className="text-band flex-text-band">
                                                    <p className="bold-bg">{item.answer}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Second Category: Structural Strength And Safety */}
            <section className="pt-0">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="layer_content p-0">
                                {faqs.length > 1 && faqs[1] && (
                                    <>
                                        <h3 className="text-primary">{faqs[1].categoryTitle}</h3>
                                        {faqs[1].questions.map((item) => (
                                            <div key={item.id}>
                                                <h6 className="mb-0 mt-3 mb-3 font-bg-700">
                                                    {item.id}. {item.question}
                                                </h6>
                                                <div className="text-band flex-text-band">
                                                    <p className="bold-bg">{item.answer}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default FAQ;