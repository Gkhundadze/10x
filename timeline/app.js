// wrapper containere (line)
const wrapper = document.querySelector('.line')
// child button
const childTrigger = document.querySelector('#child')
// female button
const femaleTrigger = document.querySelector('#female')
// male buttton
const maleTrigger = document.querySelector('#male')


// content for child 10 pcs
const childContent = ` 
                <article class="card-wrapper">
                    <div class="text-content-wrapper">
                        <h2 class="card-title">პაპილომა</h2>
                        <div class="date-and-description">
                            <div class="date-wrapper">
                                <div class="date">0.5</div>
                                <span>წელი</span>
                            </div>
                            <div class="description-wrapper">
                                <p class="description">
                                    შემთხვევითად გენერირებული
                                    ტექსტი ეხმარება დიზაინერებს და
                                    ტიპოგრაფიული ნაწარმის
                                    შემქმნელებს, რეალურთან
                                    მაქსიმალურად მიახლოებული
                                    შაბლონი წარუდგინონ
                                    შემფასებელს. ხშირადაა
                                    შემთხვევა, როდესაც დიზაინის
                                </p>
                                <a href="#" class="read-more">ვრცლად</a>
                            </div>
                        </div>
                    </div>
                    <div class="type-img-wrapper">
                        <img src="images/vaccine.png" alt="vaccine image">
                        <div class="vertical-line"></div>
                    </div>
                    <div class="virus-image-wrapper">
                        <img src="images/virus.png" alt="virus immage" class="virus-image">
                    </div>
                </article>
                <article class="card-wrapper reversed">
                    <div class="text-content-wrapper">
                        <h2 class="card-title">წითელა</h2>
                        <div class="date-and-description">
                            <div class="date-wrapper">
                                <div class="date">0.5</div>
                                <span>წელი</span>
                            </div>
                            <div class="description-wrapper">
                                <p class="description">
                                    შემთხვევითად გენერირებული
                                    ტექსტი ეხმარება დიზაინერებს და
                                    ტიპოგრაფიული ნაწარმის
                                    შემქმნელებს, რეალურთან
                                    მაქსიმალურად მიახლოებული
                                    შაბლონი წარუდგინონ
                                    შემფასებელს. ხშირადაა
                                    შემთხვევა, როდესაც დიზაინის
                                </p>
                                <a href="#" class="read-more">ვრცლად</a>
                            </div>
                        </div>
                    </div>
                    <div class="type-img-wrapper">
                        <img src="images/screening.png" alt="vaccine image">
                        <div class="vertical-line"></div>
                    </div>
                    <div class="virus-image-wrapper">
                        <img src="images/virus-2.png" alt="virus immage" class="virus-image">
                    </div>
                </article>
                <article class="card-wrapper">
                    <div class="text-content-wrapper">
                        <h2 class="card-title">პაპილომა</h2>
                        <div class="date-and-description">
                            <div class="date-wrapper">
                                <div class="date">0.5</div>
                                <span>წელი</span>
                            </div>
                            <div class="description-wrapper">
                                <p class="description">
                                    შემთხვევითად გენერირებული
                                    ტექსტი ეხმარება დიზაინერებს და
                                    ტიპოგრაფიული ნაწარმის
                                    შემქმნელებს, რეალურთან
                                    მაქსიმალურად მიახლოებული
                                    შაბლონი წარუდგინონ
                                    შემფასებელს. ხშირადაა
                                    შემთხვევა, როდესაც დიზაინის
                                </p>
                                <a href="#" class="read-more">ვრცლად</a>
                            </div>
                        </div>
                    </div>
                    <div class="type-img-wrapper">
                        <img src="images/vaccine.png" alt="vaccine image">
                        <div class="vertical-line"></div>
                    </div>
                    <div class="virus-image-wrapper">
                        <img src="images/virus.png" alt="virus immage" class="virus-image">
                    </div>
                </article>
                <article class="card-wrapper reversed">
                    <div class="text-content-wrapper">
                        <h2 class="card-title">წითელა</h2>
                        <div class="date-and-description">
                            <div class="date-wrapper">
                                <div class="date">0.5</div>
                                <span>წელი</span>
                            </div>
                            <div class="description-wrapper">
                                <p class="description">
                                    შემთხვევითად გენერირებული
                                    ტექსტი ეხმარება დიზაინერებს და
                                    ტიპოგრაფიული ნაწარმის
                                    შემქმნელებს, რეალურთან
                                    მაქსიმალურად მიახლოებული
                                    შაბლონი წარუდგინონ
                                    შემფასებელს. ხშირადაა
                                    შემთხვევა, როდესაც დიზაინის
                                </p>
                                <a href="#" class="read-more">ვრცლად</a>
                            </div>
                        </div>
                    </div>
                    <div class="type-img-wrapper">
                        <img src="images/screening.png" alt="vaccine image">
                        <div class="vertical-line"></div>
                    </div>
                    <div class="virus-image-wrapper">
                        <img src="images/virus-2.png" alt="virus immage" class="virus-image">
                    </div>
                </article>
                <article class="card-wrapper">
                    <div class="text-content-wrapper">
                        <h2 class="card-title">პაპილომა</h2>
                        <div class="date-and-description">
                            <div class="date-wrapper">
                                <div class="date">0.5</div>
                                <span>წელი</span>
                            </div>
                            <div class="description-wrapper">
                                <p class="description">
                                    შემთხვევითად გენერირებული
                                    ტექსტი ეხმარება დიზაინერებს და
                                    ტიპოგრაფიული ნაწარმის
                                    შემქმნელებს, რეალურთან
                                    მაქსიმალურად მიახლოებული
                                    შაბლონი წარუდგინონ
                                    შემფასებელს. ხშირადაა
                                    შემთხვევა, როდესაც დიზაინის
                                </p>
                                <a href="#" class="read-more">ვრცლად</a>
                            </div>
                        </div>
                    </div>
                    <div class="type-img-wrapper">
                        <img src="images/vaccine.png" alt="vaccine image">
                        <div class="vertical-line"></div>
                    </div>
                    <div class="virus-image-wrapper">
                        <img src="images/virus.png" alt="virus immage" class="virus-image">
                    </div>
                </article>
                <article class="card-wrapper reversed">
                    <div class="text-content-wrapper">
                        <h2 class="card-title">წითელა</h2>
                        <div class="date-and-description">
                            <div class="date-wrapper">
                                <div class="date">0.5</div>
                                <span>წელი</span>
                            </div>
                            <div class="description-wrapper">
                                <p class="description">
                                    შემთხვევითად გენერირებული
                                    ტექსტი ეხმარება დიზაინერებს და
                                    ტიპოგრაფიული ნაწარმის
                                    შემქმნელებს, რეალურთან
                                    მაქსიმალურად მიახლოებული
                                    შაბლონი წარუდგინონ
                                    შემფასებელს. ხშირადაა
                                    შემთხვევა, როდესაც დიზაინის
                                </p>
                                <a href="#" class="read-more">ვრცლად</a>
                            </div>
                        </div>
                    </div>
                    <div class="type-img-wrapper">
                        <img src="images/screening.png" alt="vaccine image">
                        <div class="vertical-line"></div>
                    </div>
                    <div class="virus-image-wrapper">
                        <img src="images/virus-2.png" alt="virus immage" class="virus-image">
                    </div>
                </article>
                <article class="card-wrapper">
                    <div class="text-content-wrapper">
                        <h2 class="card-title">პაპილომა</h2>
                        <div class="date-and-description">
                            <div class="date-wrapper">
                                <div class="date">0.5</div>
                                <span>წელი</span>
                            </div>
                            <div class="description-wrapper">
                                <p class="description">
                                    შემთხვევითად გენერირებული
                                    ტექსტი ეხმარება დიზაინერებს და
                                    ტიპოგრაფიული ნაწარმის
                                    შემქმნელებს, რეალურთან
                                    მაქსიმალურად მიახლოებული
                                    შაბლონი წარუდგინონ
                                    შემფასებელს. ხშირადაა
                                    შემთხვევა, როდესაც დიზაინის
                                </p>
                                <a href="#" class="read-more">ვრცლად</a>
                            </div>
                        </div>
                    </div>
                    <div class="type-img-wrapper">
                        <img src="images/vaccine.png" alt="vaccine image">
                        <div class="vertical-line"></div>
                    </div>
                    <div class="virus-image-wrapper">
                        <img src="images/virus.png" alt="virus immage" class="virus-image">
                    </div>
                </article>
                <article class="card-wrapper reversed">
                    <div class="text-content-wrapper">
                        <h2 class="card-title">წითელა</h2>
                        <div class="date-and-description">
                            <div class="date-wrapper">
                                <div class="date">0.5</div>
                                <span>წელი</span>
                            </div>
                            <div class="description-wrapper">
                                <p class="description">
                                    შემთხვევითად გენერირებული
                                    ტექსტი ეხმარება დიზაინერებს და
                                    ტიპოგრაფიული ნაწარმის
                                    შემქმნელებს, რეალურთან
                                    მაქსიმალურად მიახლოებული
                                    შაბლონი წარუდგინონ
                                    შემფასებელს. ხშირადაა
                                    შემთხვევა, როდესაც დიზაინის
                                </p>
                                <a href="#" class="read-more">ვრცლად</a>
                            </div>
                        </div>
                    </div>
                    <div class="type-img-wrapper">
                        <img src="images/screening.png" alt="vaccine image">
                        <div class="vertical-line"></div>
                    </div>
                    <div class="virus-image-wrapper">
                        <img src="images/virus-2.png" alt="virus immage" class="virus-image">
                    </div>
                </article>
                <article class="card-wrapper">
                    <div class="text-content-wrapper">
                        <h2 class="card-title">პაპილომა</h2>
                        <div class="date-and-description">
                            <div class="date-wrapper">
                                <div class="date">0.5</div>
                                <span>წელი</span>
                            </div>
                            <div class="description-wrapper">
                                <p class="description">
                                    შემთხვევითად გენერირებული
                                    ტექსტი ეხმარება დიზაინერებს და
                                    ტიპოგრაფიული ნაწარმის
                                    შემქმნელებს, რეალურთან
                                    მაქსიმალურად მიახლოებული
                                    შაბლონი წარუდგინონ
                                    შემფასებელს. ხშირადაა
                                    შემთხვევა, როდესაც დიზაინის
                                </p>
                                <a href="#" class="read-more">ვრცლად</a>
                            </div>
                        </div>
                    </div>
                    <div class="type-img-wrapper">
                        <img src="images/vaccine.png" alt="vaccine image">
                        <div class="vertical-line"></div>
                    </div>
                    <div class="virus-image-wrapper">
                        <img src="images/virus.png" alt="virus immage" class="virus-image">
                    </div>
                </article>
                <article class="card-wrapper reversed">
                    <div class="text-content-wrapper">
                        <h2 class="card-title">წითელა</h2>
                        <div class="date-and-description">
                            <div class="date-wrapper">
                                <div class="date">0.5</div>
                                <span>წელი</span>
                            </div>
                            <div class="description-wrapper">
                                <p class="description">
                                    შემთხვევითად გენერირებული
                                    ტექსტი ეხმარება დიზაინერებს და
                                    ტიპოგრაფიული ნაწარმის
                                    შემქმნელებს, რეალურთან
                                    მაქსიმალურად მიახლოებული
                                    შაბლონი წარუდგინონ
                                    შემფასებელს. ხშირადაა
                                    შემთხვევა, როდესაც დიზაინის
                                </p>
                                <a href="#" class="read-more">ვრცლად</a>
                            </div>
                        </div>
                    </div>
                    <div class="type-img-wrapper">
                        <img src="images/screening.png" alt="vaccine image">
                        <div class="vertical-line"></div>
                    </div>
                    <div class="virus-image-wrapper">
                        <img src="images/virus-2.png" alt="virus immage" class="virus-image">
                    </div>
                </article>
`
// content for female 9 pcs
const femaleContent = ` 
                <article class="card-wrapper">
                    <div class="text-content-wrapper">
                        <h2 class="card-title">პაპილომა</h2>
                        <div class="date-and-description">
                            <div class="date-wrapper">
                                <div class="date">0.5</div>
                                <span>წელი</span>
                            </div>
                            <div class="description-wrapper">
                                <p class="description">
                                    შემთხვევითად გენერირებული
                                    ტექსტი ეხმარება დიზაინერებს და
                                    ტიპოგრაფიული ნაწარმის
                                    შემქმნელებს, რეალურთან
                                    მაქსიმალურად მიახლოებული
                                    შაბლონი წარუდგინონ
                                    შემფასებელს. ხშირადაა
                                    შემთხვევა, როდესაც დიზაინის
                                </p>
                                <a href="#" class="read-more">ვრცლად</a>
                            </div>
                        </div>
                    </div>
                    <div class="type-img-wrapper">
                        <img src="images/vaccine.png" alt="vaccine image">
                        <div class="vertical-line"></div>
                    </div>
                    <div class="virus-image-wrapper">
                        <img src="images/virus.png" alt="virus immage" class="virus-image">
                    </div>
                </article>
                <article class="card-wrapper reversed">
                    <div class="text-content-wrapper">
                        <h2 class="card-title">წითელა</h2>
                        <div class="date-and-description">
                            <div class="date-wrapper">
                                <div class="date">0.5</div>
                                <span>წელი</span>
                            </div>
                            <div class="description-wrapper">
                                <p class="description">
                                    შემთხვევითად გენერირებული
                                    ტექსტი ეხმარება დიზაინერებს და
                                    ტიპოგრაფიული ნაწარმის
                                    შემქმნელებს, რეალურთან
                                    მაქსიმალურად მიახლოებული
                                    შაბლონი წარუდგინონ
                                    შემფასებელს. ხშირადაა
                                    შემთხვევა, როდესაც დიზაინის
                                </p>
                                <a href="#" class="read-more">ვრცლად</a>
                            </div>
                        </div>
                    </div>
                    <div class="type-img-wrapper">
                        <img src="images/screening.png" alt="vaccine image">
                        <div class="vertical-line"></div>
                    </div>
                    <div class="virus-image-wrapper">
                        <img src="images/virus-2.png" alt="virus immage" class="virus-image">
                    </div>
                </article>
                <article class="card-wrapper">
                    <div class="text-content-wrapper">
                        <h2 class="card-title">პაპილომა</h2>
                        <div class="date-and-description">
                            <div class="date-wrapper">
                                <div class="date">0.5</div>
                                <span>წელი</span>
                            </div>
                            <div class="description-wrapper">
                                <p class="description">
                                    შემთხვევითად გენერირებული
                                    ტექსტი ეხმარება დიზაინერებს და
                                    ტიპოგრაფიული ნაწარმის
                                    შემქმნელებს, რეალურთან
                                    მაქსიმალურად მიახლოებული
                                    შაბლონი წარუდგინონ
                                    შემფასებელს. ხშირადაა
                                    შემთხვევა, როდესაც დიზაინის
                                </p>
                                <a href="#" class="read-more">ვრცლად</a>
                            </div>
                        </div>
                    </div>
                    <div class="type-img-wrapper">
                        <img src="images/vaccine.png" alt="vaccine image">
                        <div class="vertical-line"></div>
                    </div>
                    <div class="virus-image-wrapper">
                        <img src="images/virus.png" alt="virus immage" class="virus-image">
                    </div>
                </article>
                <article class="card-wrapper reversed">
                    <div class="text-content-wrapper">
                        <h2 class="card-title">წითელა</h2>
                        <div class="date-and-description">
                            <div class="date-wrapper">
                                <div class="date">0.5</div>
                                <span>წელი</span>
                            </div>
                            <div class="description-wrapper">
                                <p class="description">
                                    შემთხვევითად გენერირებული
                                    ტექსტი ეხმარება დიზაინერებს და
                                    ტიპოგრაფიული ნაწარმის
                                    შემქმნელებს, რეალურთან
                                    მაქსიმალურად მიახლოებული
                                    შაბლონი წარუდგინონ
                                    შემფასებელს. ხშირადაა
                                    შემთხვევა, როდესაც დიზაინის
                                </p>
                                <a href="#" class="read-more">ვრცლად</a>
                            </div>
                        </div>
                    </div>
                    <div class="type-img-wrapper">
                        <img src="images/screening.png" alt="vaccine image">
                        <div class="vertical-line"></div>
                    </div>
                    <div class="virus-image-wrapper">
                        <img src="images/virus-2.png" alt="virus immage" class="virus-image">
                    </div>
                </article>
                <article class="card-wrapper">
                    <div class="text-content-wrapper">
                        <h2 class="card-title">პაპილომა</h2>
                        <div class="date-and-description">
                            <div class="date-wrapper">
                                <div class="date">0.5</div>
                                <span>წელი</span>
                            </div>
                            <div class="description-wrapper">
                                <p class="description">
                                    შემთხვევითად გენერირებული
                                    ტექსტი ეხმარება დიზაინერებს და
                                    ტიპოგრაფიული ნაწარმის
                                    შემქმნელებს, რეალურთან
                                    მაქსიმალურად მიახლოებული
                                    შაბლონი წარუდგინონ
                                    შემფასებელს. ხშირადაა
                                    შემთხვევა, როდესაც დიზაინის
                                </p>
                                <a href="#" class="read-more">ვრცლად</a>
                            </div>
                        </div>
                    </div>
                    <div class="type-img-wrapper">
                        <img src="images/vaccine.png" alt="vaccine image">
                        <div class="vertical-line"></div>
                    </div>
                    <div class="virus-image-wrapper">
                        <img src="images/virus.png" alt="virus immage" class="virus-image">
                    </div>
                </article>
                <article class="card-wrapper reversed">
                    <div class="text-content-wrapper">
                        <h2 class="card-title">წითელა</h2>
                        <div class="date-and-description">
                            <div class="date-wrapper">
                                <div class="date">0.5</div>
                                <span>წელი</span>
                            </div>
                            <div class="description-wrapper">
                                <p class="description">
                                    შემთხვევითად გენერირებული
                                    ტექსტი ეხმარება დიზაინერებს და
                                    ტიპოგრაფიული ნაწარმის
                                    შემქმნელებს, რეალურთან
                                    მაქსიმალურად მიახლოებული
                                    შაბლონი წარუდგინონ
                                    შემფასებელს. ხშირადაა
                                    შემთხვევა, როდესაც დიზაინის
                                </p>
                                <a href="#" class="read-more">ვრცლად</a>
                            </div>
                        </div>
                    </div>
                    <div class="type-img-wrapper">
                        <img src="images/screening.png" alt="vaccine image">
                        <div class="vertical-line"></div>
                    </div>
                    <div class="virus-image-wrapper">
                        <img src="images/virus-2.png" alt="virus immage" class="virus-image">
                    </div>
                </article>
                <article class="card-wrapper">
                    <div class="text-content-wrapper">
                        <h2 class="card-title">პაპილომა</h2>
                        <div class="date-and-description">
                            <div class="date-wrapper">
                                <div class="date">0.5</div>
                                <span>წელი</span>
                            </div>
                            <div class="description-wrapper">
                                <p class="description">
                                    შემთხვევითად გენერირებული
                                    ტექსტი ეხმარება დიზაინერებს და
                                    ტიპოგრაფიული ნაწარმის
                                    შემქმნელებს, რეალურთან
                                    მაქსიმალურად მიახლოებული
                                    შაბლონი წარუდგინონ
                                    შემფასებელს. ხშირადაა
                                    შემთხვევა, როდესაც დიზაინის
                                </p>
                                <a href="#" class="read-more">ვრცლად</a>
                            </div>
                        </div>
                    </div>
                    <div class="type-img-wrapper">
                        <img src="images/vaccine.png" alt="vaccine image">
                        <div class="vertical-line"></div>
                    </div>
                    <div class="virus-image-wrapper">
                        <img src="images/virus.png" alt="virus immage" class="virus-image">
                    </div>
                </article>
                <article class="card-wrapper reversed">
                    <div class="text-content-wrapper">
                        <h2 class="card-title">წითელა</h2>
                        <div class="date-and-description">
                            <div class="date-wrapper">
                                <div class="date">0.5</div>
                                <span>წელი</span>
                            </div>
                            <div class="description-wrapper">
                                <p class="description">
                                    შემთხვევითად გენერირებული
                                    ტექსტი ეხმარება დიზაინერებს და
                                    ტიპოგრაფიული ნაწარმის
                                    შემქმნელებს, რეალურთან
                                    მაქსიმალურად მიახლოებული
                                    შაბლონი წარუდგინონ
                                    შემფასებელს. ხშირადაა
                                    შემთხვევა, როდესაც დიზაინის
                                </p>
                                <a href="#" class="read-more">ვრცლად</a>
                            </div>
                        </div>
                    </div>
                    <div class="type-img-wrapper">
                        <img src="images/screening.png" alt="vaccine image">
                        <div class="vertical-line"></div>
                    </div>
                    <div class="virus-image-wrapper">
                        <img src="images/virus-2.png" alt="virus immage" class="virus-image">
                    </div>
                </article>
                <article class="card-wrapper">
                    <div class="text-content-wrapper">
                        <h2 class="card-title">პაპილომა</h2>
                        <div class="date-and-description">
                            <div class="date-wrapper">
                                <div class="date">0.5</div>
                                <span>წელი</span>
                            </div>
                            <div class="description-wrapper">
                                <p class="description">
                                    შემთხვევითად გენერირებული
                                    ტექსტი ეხმარება დიზაინერებს და
                                    ტიპოგრაფიული ნაწარმის
                                    შემქმნელებს, რეალურთან
                                    მაქსიმალურად მიახლოებული
                                    შაბლონი წარუდგინონ
                                    შემფასებელს. ხშირადაა
                                    შემთხვევა, როდესაც დიზაინის
                                </p>
                                <a href="#" class="read-more">ვრცლად</a>
                            </div>
                        </div>
                    </div>
                    <div class="type-img-wrapper">
                        <img src="images/vaccine.png" alt="vaccine image">
                        <div class="vertical-line"></div>
                    </div>
                    <div class="virus-image-wrapper">
                        <img src="images/virus.png" alt="virus immage" class="virus-image">
                    </div>
                </article>
`
// content for male 7 pcs
const maleContent = ` 
                <article class="card-wrapper">
                    <div class="text-content-wrapper">
                        <h2 class="card-title">პაპილომა</h2>
                        <div class="date-and-description">
                            <div class="date-wrapper">
                                <div class="date">0.5</div>
                                <span>წელი</span>
                            </div>
                            <div class="description-wrapper">
                                <p class="description">
                                    შემთხვევითად გენერირებული
                                    ტექსტი ეხმარება დიზაინერებს და
                                    ტიპოგრაფიული ნაწარმის
                                    შემქმნელებს, რეალურთან
                                    მაქსიმალურად მიახლოებული
                                    შაბლონი წარუდგინონ
                                    შემფასებელს. ხშირადაა
                                    შემთხვევა, როდესაც დიზაინის
                                </p>
                                <a href="#" class="read-more">ვრცლად</a>
                            </div>
                        </div>
                    </div>
                    <div class="type-img-wrapper">
                        <img src="images/vaccine.png" alt="vaccine image">
                        <div class="vertical-line"></div>
                    </div>
                    <div class="virus-image-wrapper">
                        <img src="images/virus.png" alt="virus immage" class="virus-image">
                    </div>
                </article>
                <article class="card-wrapper reversed">
                    <div class="text-content-wrapper">
                        <h2 class="card-title">წითელა</h2>
                        <div class="date-and-description">
                            <div class="date-wrapper">
                                <div class="date">0.5</div>
                                <span>წელი</span>
                            </div>
                            <div class="description-wrapper">
                                <p class="description">
                                    შემთხვევითად გენერირებული
                                    ტექსტი ეხმარება დიზაინერებს და
                                    ტიპოგრაფიული ნაწარმის
                                    შემქმნელებს, რეალურთან
                                    მაქსიმალურად მიახლოებული
                                    შაბლონი წარუდგინონ
                                    შემფასებელს. ხშირადაა
                                    შემთხვევა, როდესაც დიზაინის
                                </p>
                                <a href="#" class="read-more">ვრცლად</a>
                            </div>
                        </div>
                    </div>
                    <div class="type-img-wrapper">
                        <img src="images/screening.png" alt="vaccine image">
                        <div class="vertical-line"></div>
                    </div>
                    <div class="virus-image-wrapper">
                        <img src="images/virus-2.png" alt="virus immage" class="virus-image">
                    </div>
                </article>
                <article class="card-wrapper">
                    <div class="text-content-wrapper">
                        <h2 class="card-title">პაპილომა</h2>
                        <div class="date-and-description">
                            <div class="date-wrapper">
                                <div class="date">0.5</div>
                                <span>წელი</span>
                            </div>
                            <div class="description-wrapper">
                                <p class="description">
                                    შემთხვევითად გენერირებული
                                    ტექსტი ეხმარება დიზაინერებს და
                                    ტიპოგრაფიული ნაწარმის
                                    შემქმნელებს, რეალურთან
                                    მაქსიმალურად მიახლოებული
                                    შაბლონი წარუდგინონ
                                    შემფასებელს. ხშირადაა
                                    შემთხვევა, როდესაც დიზაინის
                                </p>
                                <a href="#" class="read-more">ვრცლად</a>
                            </div>
                        </div>
                    </div>
                    <div class="type-img-wrapper">
                        <img src="images/vaccine.png" alt="vaccine image">
                        <div class="vertical-line"></div>
                    </div>
                    <div class="virus-image-wrapper">
                        <img src="images/virus.png" alt="virus immage" class="virus-image">
                    </div>
                </article>
                <article class="card-wrapper reversed">
                    <div class="text-content-wrapper">
                        <h2 class="card-title">წითელა</h2>
                        <div class="date-and-description">
                            <div class="date-wrapper">
                                <div class="date">0.5</div>
                                <span>წელი</span>
                            </div>
                            <div class="description-wrapper">
                                <p class="description">
                                    შემთხვევითად გენერირებული
                                    ტექსტი ეხმარება დიზაინერებს და
                                    ტიპოგრაფიული ნაწარმის
                                    შემქმნელებს, რეალურთან
                                    მაქსიმალურად მიახლოებული
                                    შაბლონი წარუდგინონ
                                    შემფასებელს. ხშირადაა
                                    შემთხვევა, როდესაც დიზაინის
                                </p>
                                <a href="#" class="read-more">ვრცლად</a>
                            </div>
                        </div>
                    </div>
                    <div class="type-img-wrapper">
                        <img src="images/screening.png" alt="vaccine image">
                        <div class="vertical-line"></div>
                    </div>
                    <div class="virus-image-wrapper">
                        <img src="images/virus-2.png" alt="virus immage" class="virus-image">
                    </div>
                </article>
                <article class="card-wrapper">
                    <div class="text-content-wrapper">
                        <h2 class="card-title">პაპილომა</h2>
                        <div class="date-and-description">
                            <div class="date-wrapper">
                                <div class="date">0.5</div>
                                <span>წელი</span>
                            </div>
                            <div class="description-wrapper">
                                <p class="description">
                                    შემთხვევითად გენერირებული
                                    ტექსტი ეხმარება დიზაინერებს და
                                    ტიპოგრაფიული ნაწარმის
                                    შემქმნელებს, რეალურთან
                                    მაქსიმალურად მიახლოებული
                                    შაბლონი წარუდგინონ
                                    შემფასებელს. ხშირადაა
                                    შემთხვევა, როდესაც დიზაინის
                                </p>
                                <a href="#" class="read-more">ვრცლად</a>
                            </div>
                        </div>
                    </div>
                    <div class="type-img-wrapper">
                        <img src="images/vaccine.png" alt="vaccine image">
                        <div class="vertical-line"></div>
                    </div>
                    <div class="virus-image-wrapper">
                        <img src="images/virus.png" alt="virus immage" class="virus-image">
                    </div>
                </article>
                <article class="card-wrapper reversed">
                    <div class="text-content-wrapper">
                        <h2 class="card-title">წითელა</h2>
                        <div class="date-and-description">
                            <div class="date-wrapper">
                                <div class="date">0.5</div>
                                <span>წელი</span>
                            </div>
                            <div class="description-wrapper">
                                <p class="description">
                                    შემთხვევითად გენერირებული
                                    ტექსტი ეხმარება დიზაინერებს და
                                    ტიპოგრაფიული ნაწარმის
                                    შემქმნელებს, რეალურთან
                                    მაქსიმალურად მიახლოებული
                                    შაბლონი წარუდგინონ
                                    შემფასებელს. ხშირადაა
                                    შემთხვევა, როდესაც დიზაინის
                                </p>
                                <a href="#" class="read-more">ვრცლად</a>
                            </div>
                        </div>
                    </div>
                    <div class="type-img-wrapper">
                        <img src="images/screening.png" alt="vaccine image">
                        <div class="vertical-line"></div>
                    </div>
                    <div class="virus-image-wrapper">
                        <img src="images/virus-2.png" alt="virus immage" class="virus-image">
                    </div>
                </article>
                <article class="card-wrapper">
                    <div class="text-content-wrapper">
                        <h2 class="card-title">პაპილომა</h2>
                        <div class="date-and-description">
                            <div class="date-wrapper">
                                <div class="date">0.5</div>
                                <span>წელი</span>
                            </div>
                            <div class="description-wrapper">
                                <p class="description">
                                    შემთხვევითად გენერირებული
                                    ტექსტი ეხმარება დიზაინერებს და
                                    ტიპოგრაფიული ნაწარმის
                                    შემქმნელებს, რეალურთან
                                    მაქსიმალურად მიახლოებული
                                    შაბლონი წარუდგინონ
                                    შემფასებელს. ხშირადაა
                                    შემთხვევა, როდესაც დიზაინის
                                </p>
                                <a href="#" class="read-more">ვრცლად</a>
                            </div>
                        </div>
                    </div>
                    <div class="type-img-wrapper">
                        <img src="images/vaccine.png" alt="vaccine image">
                        <div class="vertical-line"></div>
                    </div>
                    <div class="virus-image-wrapper">
                        <img src="images/virus.png" alt="virus immage" class="virus-image">
                    </div>
                </article>
`

// initial load data (child content)
wrapper.innerHTML = childContent

// case when child button clicked
childTrigger.addEventListener('click', () => {
    childTrigger.classList.add('active')
    femaleTrigger.classList.remove('active')
    maleTrigger.classList.remove('active')
    wrapper.innerHTML = childContent
})

// case when female button clicked
femaleTrigger.addEventListener('click', () => {
    childTrigger.classList.remove('active')
    femaleTrigger.classList.add('active')
    maleTrigger.classList.remove('active')
    wrapper.innerHTML = femaleContent
})

// case when male button clicked
maleTrigger.addEventListener('click', () => {
    childTrigger.classList.remove('active')
    femaleTrigger.classList.remove('active')
    maleTrigger.classList.add('active')
    wrapper.innerHTML = maleContent
})

