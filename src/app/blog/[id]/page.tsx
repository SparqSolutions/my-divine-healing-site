import Link from 'next/link';
import Image from 'next/image';

// This is a placeholder for the blog post data.
// In a real application, you would fetch this data from a CMS or a database.
const getBlogPost = (id: string) => {
  const blogPosts = [
    {
      id: 1,
      title: "Finding Peace in Times of Anxiety: A Christian Perspective",
      content: (
        <div className="space-y-6">
          <p>
            In our fast-paced world, anxiety has become an unwelcome companion for many. As Christians, we often struggle with the tension between our faith and our fears, wondering if our anxiety indicates a lack of trust in God. Today, I want to share with you that anxiety is not a sign of spiritual weakness, but rather an opportunity to deepen our relationship with our Heavenly Father.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Understanding Anxiety Through a Biblical Lens</h2>
          
          <p>
            The Bible doesn&apos;t shy away from discussing anxiety and worry. In fact, Jesus himself acknowledged the reality of anxiety when he said, &ldquo;Therefore do not worry about tomorrow, for tomorrow will worry about itself. Each day has enough trouble of its own&rdquo; (Matthew 6:34). This verse isn&apos;t dismissive of our struggles; it&apos;s an invitation to trust in God&apos;s provision.
          </p>
          
          <blockquote className="border-l-4 border-divine-blue pl-4 italic text-gray-700 my-6">
            &ldquo;Cast all your anxiety on him because he cares for you.&rdquo; - 1 Peter 5:7
          </blockquote>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Practical Strategies for Managing Anxiety</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1. Prayer and Meditation</h3>
          <p>
            Begin each day with intentional prayer. Share your worries with God, not because He doesn&apos;t already know them, but because the act of surrendering them brings peace to your heart. Consider incorporating biblical meditation into your routine, focusing on verses that speak to God&apos;s faithfulness and love.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2. Scripture Memorization</h3>
          <p>
            Memorize key verses that speak to God&apos;s peace and provision. When anxiety strikes, having these truths readily available in your mind can provide immediate comfort and redirect your thoughts toward God&apos;s promises.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3. Community Support</h3>
          <p>
            Don&apos;t walk this journey alone. Seek support from your church community, trusted friends, or a Christian counselor. Sometimes, professional help is not just beneficial but necessary, and seeking it is an act of wisdom, not weakness.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">When to Seek Professional Help</h2>
          
          <p>
            While faith is a powerful resource in managing anxiety, there are times when professional intervention is crucial. If your anxiety is significantly impacting your daily life, relationships, or ability to function, please consider reaching out to a mental health professional who understands and respects your faith journey.
          </p>
          
          <div className="bg-divine-light-blue p-6 rounded-lg mt-8">
            <h3 className="text-lg font-semibold text-divine-blue mb-2">Remember:</h3>
            <p className="text-gray-700">
              Your anxiety doesn&apos;t define you, and it doesn&apos;t disqualify you from God&apos;s love and purpose for your life. He is with you in every moment of worry and fear, ready to provide the peace that surpasses all understanding.
            </p>
          </div>
        </div>
      ),
      author: "Divine Healing Therapy",
      date: "March 15, 2024",
      category: "Mental Health",
      readTime: "5 min read",
      image: "/blog/blogPic1.jpg"
    },
    {
      id: 2,
      title: "The Power of Prayer in Healing Trauma",
      content: (
        <div className="space-y-6">
          <p>
            Trauma leaves deep wounds that affect not just our minds, but our spirits as well. As believers, we often wonder how prayer fits into the healing process and whether faith alone is sufficient for recovery. The truth is that prayer is a powerful tool in trauma healing, working alongside professional therapy to bring complete restoration.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Nature of Trauma and Spiritual Healing</h2>
          
          <p>
            Trauma disrupts our sense of safety, trust, and connection—not just with others, but often with God himself. Many trauma survivors struggle with questions like &ldquo;Where was God when this happened?&rdquo; or &ldquo;Why didn&apos;t God protect me?&rdquo; These questions are valid and part of the healing journey.
          </p>
          
          <blockquote className="border-l-4 border-divine-blue pl-4 italic text-gray-700 my-6">
            &ldquo;The Lord is close to the brokenhearted and saves those who are crushed in spirit.&rdquo; - Psalm 34:18
          </blockquote>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">How Prayer Facilitates Healing</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Creating Sacred Space</h3>
          <p>
            Prayer creates a sacred space where we can safely express our pain, anger, and confusion. God can handle our raw emotions and deepest questions. This honest communication with God is often the first step in healing.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Restoring Trust</h3>
          <p>
            Trauma often shatters our ability to trust. Through prayer and experiencing God&apos;s faithfulness in small ways, we can gradually rebuild our capacity for trust—first with God, then with others.
          </p>
          
          <div className="bg-divine-beige p-6 rounded-lg mt-8">
            <h3 className="text-lg font-semibold text-divine-blue mb-2">Professional Support is Essential</h3>
            <p className="text-gray-700">
              While prayer is powerful, trauma healing often requires professional intervention. A skilled therapist can provide tools and techniques that complement your spiritual journey toward wholeness.
            </p>
          </div>
        </div>
      ),
      author: "Divine Healing Therapy",
      date: "March 10, 2024",
      category: "Trauma Recovery",
      readTime: "7 min read",
      image: "/blog/blogPic2.jpg"
    },
    {
      id: 3,
      title: "Strengthening Your Marriage Through Biblical Principles",
      content: (
        <div className="space-y-6">
          <p>
            Marriage is one of God&apos;s most beautiful gifts, designed to reflect His love for us and provide a foundation for spiritual growth. Yet in our modern world, marriages face unprecedented challenges. How can couples build stronger, more loving relationships that honor God and withstand life&apos;s storms?
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Foundation: Love as Christ Loved</h2>
          
          <p>
            The apostle Paul provides the blueprint for Christian marriage in Ephesians 5:25: &ldquo;Husbands, love your wives, just as Christ loved the church and gave himself up for her.&rdquo; This sacrificial love isn&apos;t just for husbands—it&apos;s a model for both spouses to follow.
          </p>
          
          <blockquote className="border-l-4 border-divine-blue pl-4 italic text-gray-700 my-6">
            &ldquo;Above all, love each other deeply, because love covers over a multitude of sins.&rdquo; - 1 Peter 4:8
          </blockquote>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Essential Biblical Principles for Marriage</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1. Mutual Submission and Respect</h3>
          <p>
            True biblical submission is mutual—both spouses submitting to one another out of reverence for Christ (Ephesians 5:21). This creates an environment where both partners feel valued, heard, and respected. It&apos;s not about hierarchy, but about putting your spouse&apos;s needs alongside your own.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2. Forgiveness as a Daily Practice</h3>
          <p>
            Marriage requires daily forgiveness. As Christ forgave us, we must forgive our spouses—not just for major offenses, but for the small daily irritations that can build walls between us. Forgiveness doesn&apos;t mean ignoring problems, but choosing love over resentment.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3. Communication with Grace and Truth</h3>
          <p>
            Ephesians 4:15 calls us to speak &ldquo;the truth in love.&rdquo; In marriage, this means having difficult conversations with kindness, listening to understand rather than to win, and choosing words that build up rather than tear down.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Practical Steps to Strengthen Your Marriage</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Pray Together Daily</h3>
          <p>
            Couples who pray together create a spiritual bond that transcends physical and emotional connection. Start small—perhaps just a brief prayer before meals or bedtime. As you grow comfortable, share deeper prayer requests and praise reports.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Study Scripture Together</h3>
          <p>
            Reading God&apos;s Word together provides a shared foundation for decision-making and spiritual growth. Consider reading a chapter together each week and discussing how it applies to your marriage and family life.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Serve Others as a Team</h3>
          <p>
            When couples serve together—whether in their church, community, or family—they develop a sense of shared purpose that strengthens their bond. Look for opportunities to use your combined gifts to bless others.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">When Marriage Feels Difficult</h2>
          
          <p>
            Every marriage goes through seasons of difficulty. During these times, remember that God is not surprised by your struggles. He can use even the hardest seasons to draw you closer to Him and to each other.
          </p>
          
          <div className="bg-divine-light-blue p-6 rounded-lg mt-8">
            <h3 className="text-lg font-semibold text-divine-blue mb-2">Seeking Help is Strength</h3>
            <p className="text-gray-700">
              If your marriage is struggling, don&apos;t wait until it&apos;s too late. Seeking Christian counseling is an act of courage and wisdom. A skilled therapist can help you navigate challenges while strengthening your spiritual foundation.
            </p>
          </div>
          
          <p className="mt-6">
            Remember, God&apos;s design for marriage is good. He wants your marriage to flourish, to be a source of joy and spiritual growth, and to reflect His love to the world. With His help and the right tools, any marriage can be transformed.
          </p>
        </div>
      ),
      author: "Divine Healing Therapy",
      date: "March 5, 2024",
      category: "Relationships",
      readTime: "6 min read",
      image: "/blog/blogPic3.jpg"
    },
    {
      id: 4,
      title: "Understanding Depression: When Faith Meets Mental Health",
      content: (
        <div className="space-y-6">
          <p>
            Depression affects millions of people worldwide, including many faithful Christians. Yet in religious communities, there&apos;s often a stigma surrounding mental health struggles. Some believe that depression indicates a lack of faith or spiritual maturity. Today, let&apos;s explore how faith and mental health can work together in the journey toward healing.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Depression in the Bible</h2>
          
          <p>
            The Bible doesn&apos;t shy away from depicting mental and emotional struggles. King David, described as &ldquo;a man after God&apos;s own heart,&rdquo; wrote extensively about his depression and despair in the Psalms. Elijah, after his victory over the prophets of Baal, fell into such deep depression that he wanted to die (1 Kings 19:4).
          </p>
          
          <blockquote className="border-l-4 border-divine-blue pl-4 italic text-gray-700 my-6">
            &ldquo;Why, my soul, are you downcast? Why so disturbed within me? Put your hope in God, for I will yet praise him, my Savior and my God.&rdquo; - Psalm 42:5
          </blockquote>
          
          <p>
            These biblical accounts show us that depression is not a sign of spiritual failure. Even the most faithful servants of God experienced seasons of darkness and despair.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Understanding Depression as a Christian</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Depression is Not a Sin</h3>
          <p>
            Depression is a medical condition that affects the brain&apos;s chemistry and function. Just as we wouldn&apos;t blame someone for having diabetes or heart disease, we shouldn&apos;t view depression as a moral failing. It&apos;s an illness that requires treatment, compassion, and understanding.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Faith Can Coexist with Treatment</h3>
          <p>
            Seeking professional help for depression doesn&apos;t indicate weak faith—it demonstrates wisdom and self-care. God has given us medical knowledge, therapy techniques, and medications as tools for healing. Using these resources while maintaining our faith creates a comprehensive approach to recovery.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Community Support is Essential</h3>
          <p>
            The church should be a place of healing and support for those struggling with depression. Unfortunately, stigma sometimes prevents people from seeking help within their faith community. We must create safe spaces where mental health struggles can be discussed openly and compassionately.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Spiritual Practices for Depression</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Honest Prayer</h3>
          <p>
            God can handle our honest emotions, including anger, despair, and confusion. The Psalms are filled with raw, honest prayers that express the full range of human emotion. Don&apos;t feel you need to &ldquo;clean up&rdquo; your prayers—God wants your authentic heart.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Scripture for Comfort</h3>
          <p>
            While Scripture isn&apos;t a cure for depression, it can provide comfort and hope during dark seasons. Verses about God&apos;s love, faithfulness, and presence can serve as anchors when emotions feel overwhelming.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Worship and Gratitude</h3>
          <p>
            Even when we don&apos;t feel like it, choosing to worship and practice gratitude can slowly shift our perspective. Start small—perhaps noting one thing you&apos;re grateful for each day or listening to worship music that speaks to your heart.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Professional Help and Faith-Based Therapy</h2>
          
          <p>
            Christian counselors and therapists can provide specialized care that honors both your mental health needs and your faith journey. They understand the unique challenges that Christians face with depression and can integrate biblical principles with evidence-based treatment approaches.
          </p>
          
          <div className="bg-divine-beige p-6 rounded-lg mt-8">
            <h3 className="text-lg font-semibold text-divine-blue mb-2">Signs You Should Seek Help</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• Persistent sadness or hopelessness lasting more than two weeks</li>
              <li>• Loss of interest in activities you once enjoyed</li>
              <li>• Significant changes in sleep or appetite</li>
              <li>• Difficulty concentrating or making decisions</li>
              <li>• Thoughts of self-harm or suicide</li>
              <li>• Inability to function in daily life</li>
            </ul>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Hope for the Journey</h2>
          
          <p>
            Depression can feel overwhelming and endless, but there is hope. With proper treatment, support, and faith, many people recover and go on to live fulfilling lives. Your struggle with depression doesn&apos;t disqualify you from God&apos;s love or purpose for your life.
          </p>
          
          <div className="bg-divine-light-blue p-6 rounded-lg mt-8">
            <h3 className="text-lg font-semibold text-divine-blue mb-2">Remember:</h3>
            <p className="text-gray-700">
              You are not alone in this battle. God is with you, and there are people who want to help. Depression is treatable, and with the right support, you can find your way back to joy and purpose.
            </p>
          </div>
        </div>
      ),
      author: "Divine Healing Therapy",
      date: "February 28, 2024",
      category: "Mental Health",
      readTime: "8 min read",
      image: "/blog/blogPic4.jpg"
    },
    {
      id: 5,
      title: "Forgiveness as a Path to Emotional Freedom",
      content: (
        <div className="space-y-6">
          <p>
            Forgiveness is one of the most challenging yet transformative aspects of the Christian faith. When we&apos;ve been deeply hurt, betrayed, or wronged, the natural human response is to hold onto anger and resentment. Yet Jesus calls us to forgive—not just once, but &ldquo;seventy-seven times&rdquo; (Matthew 18:22). Why does forgiveness matter so much, and how can we find the strength to forgive when it feels impossible?
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Understanding Biblical Forgiveness</h2>
          
          <p>
            Forgiveness is not about excusing harmful behavior or pretending that hurt didn&apos;t happen. It&apos;s not about forgetting or immediately trusting again. Biblical forgiveness is a conscious choice to release the right to revenge and to entrust justice to God. It&apos;s about freeing yourself from the prison of bitterness and resentment.
          </p>
          
          <blockquote className="border-l-4 border-divine-blue pl-4 italic text-gray-700 my-6">
            &ldquo;Be kind and compassionate to one another, forgiving each other, just as in Christ God forgave you.&rdquo; - Ephesians 4:32
          </blockquote>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Cost of Unforgiveness</h2>
          
          <p>
            Holding onto unforgiveness is like drinking poison and expecting the other person to get sick. Research shows that chronic anger and resentment can lead to physical health problems, including high blood pressure, heart disease, and weakened immune function. More importantly, unforgiveness creates spiritual barriers that hinder our relationship with God and others.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Emotional Consequences</h3>
          <p>
            Unforgiveness keeps us emotionally tied to our pain. It replays the hurt over and over, preventing healing and growth. It can lead to depression, anxiety, and an inability to form healthy relationships. The person who hurt us continues to have power over our emotional well-being.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Spiritual Consequences</h3>
          <p>
            Jesus taught us to pray, &ldquo;Forgive us our debts, as we also have forgiven our debtors&rdquo; (Matthew 6:12). Our willingness to forgive others is directly connected to our experience of God&apos;s forgiveness. When we refuse to forgive, we block the flow of God&apos;s grace in our own lives.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Process of Forgiveness</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1. Acknowledge the Hurt</h3>
          <p>
            True forgiveness begins with honesty about the depth of our pain. Don&apos;t minimize what happened or rush to &ldquo;get over it.&rdquo; Allow yourself to feel the full weight of the hurt while bringing it to God in prayer.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2. Choose to Forgive</h3>
          <p>
            Forgiveness is a decision, not a feeling. You may not feel forgiving, but you can choose to forgive. This choice may need to be made repeatedly as emotions resurface. Each time you choose forgiveness, you&apos;re taking another step toward freedom.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3. Release the Right to Revenge</h3>
          <p>
            Give up your desire to make the other person pay for what they did. This doesn&apos;t mean there shouldn&apos;t be consequences for their actions, but it means you&apos;re not personally responsible for ensuring they suffer. Trust God to handle justice in His way and time.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">4. Pray for Your Offender</h3>
          <p>
            Jesus commanded us to &ldquo;pray for those who persecute you&rdquo; (Matthew 5:44). This may feel impossible at first, but praying for someone who hurt you gradually softens your heart and breaks the power of bitterness.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">When Forgiveness Feels Impossible</h2>
          
          <p>
            Some hurts run so deep that forgiveness feels impossible. Abuse, betrayal, abandonment—these wounds can feel too great to forgive. In these situations, remember that forgiveness is a process, not a one-time event. You don&apos;t have to forgive perfectly or completely right away.
          </p>
          
          <div className="bg-divine-beige p-6 rounded-lg mt-8">
            <h3 className="text-lg font-semibold text-divine-blue mb-2">When Professional Help is Needed</h3>
            <p className="text-gray-700">
              Some wounds are too deep to heal alone. If you&apos;re struggling to forgive, especially in cases of abuse or severe trauma, consider working with a Christian counselor who can guide you through the process safely and thoroughly.
            </p>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Forgiving Yourself</h2>
          
          <p>
            Often, the person we have the hardest time forgiving is ourselves. We replay our mistakes, hold onto shame, and struggle to accept God&apos;s grace. Remember that if God forgives you, you can forgive yourself. Self-forgiveness is not selfish—it&apos;s necessary for spiritual and emotional health.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Freedom of Forgiveness</h2>
          
          <p>
            When we truly forgive, we experience a profound sense of freedom. The weight of anger and resentment lifts. We&apos;re able to love more freely, trust more deeply, and live more fully. Forgiveness doesn&apos;t change the past, but it transforms the future.
          </p>
          
          <div className="bg-divine-light-blue p-6 rounded-lg mt-8">
            <h3 className="text-lg font-semibold text-divine-blue mb-2">The Promise of Healing</h3>
            <p className="text-gray-700">
              &ldquo;He heals the brokenhearted and binds up their wounds&rdquo; (Psalm 147:3). God specializes in healing the deepest hurts and the most broken hearts. Through forgiveness, we open ourselves to His healing power and step into the freedom He designed for us.
            </p>
          </div>
        </div>
      ),
      author: "Divine Healing Therapy",
      date: "February 22, 2024",
      category: "Emotional Healing",
      readTime: "5 min read",
      image: "/blog/blogPic5.jpg"
    },
    {
      id: 6,
      title: "Parenting with Grace: Christian Approaches to Family Challenges",
      content: (
        <div className="space-y-6">
          <p>
            Parenting is one of life&apos;s greatest joys and most challenging responsibilities. As Christian parents, we want to raise children who love God, make wise choices, and grow into mature, responsible adults. Yet in our complex modern world, this task can feel overwhelming. How can we parent with grace while maintaining biblical principles and healthy boundaries?
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Foundation: Parenting as God Parents Us</h2>
          
          <p>
            Our model for parenting comes from understanding how God parents us. He combines perfect love with perfect justice, offers grace while maintaining boundaries, and disciplines us because He loves us. As earthly parents, we&apos;re called to reflect God&apos;s character in our parenting—showing love, providing guidance, and creating a safe environment for growth.
          </p>
          
          <blockquote className="border-l-4 border-divine-blue pl-4 italic text-gray-700 my-6">
            &ldquo;Train up a child in the way he should go; even when he is old he will not depart from it.&rdquo; - Proverbs 22:6
          </blockquote>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Core Principles of Christian Parenting</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">1. Love Unconditionally</h3>
          <p>
            Children need to know they are loved regardless of their behavior or achievements. This doesn&apos;t mean we approve of all their choices, but it means our love for them never wavers. When children feel secure in their parents&apos; love, they&apos;re more likely to make good choices and recover quickly from mistakes.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">2. Discipline with Purpose</h3>
          <p>
            Biblical discipline is about teaching and training, not punishment for punishment&apos;s sake. The goal is to help children develop self-control, wisdom, and character. Discipline should be consistent, age-appropriate, and always motivated by love rather than anger.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">3. Model What You Teach</h3>
          <p>
            Children learn more from what they see than what they hear. If we want our children to be kind, honest, and faithful, we must model these qualities ourselves. Our relationship with God, our marriage, and our interactions with others all serve as powerful lessons for our children.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Practical Strategies for Common Challenges</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Dealing with Defiance</h3>
          <p>
            When children are defiant, it&apos;s often a sign they&apos;re testing boundaries or expressing unmet needs. Stay calm, reaffirm your love, and maintain consistent consequences. Ask yourself: &ldquo;What is my child trying to communicate through this behavior?&rdquo; Sometimes defiance masks fear, frustration, or a need for attention.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Navigating Sibling Rivalry</h3>
          <p>
            Sibling conflict is normal, but it can be exhausting for parents. Focus on teaching conflict resolution skills rather than always playing referee. Help each child feel special and valued for their unique gifts. Avoid comparisons and celebrate each child&apos;s individual strengths.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Managing Screen Time and Technology</h3>
          <p>
            Technology isn&apos;t inherently good or bad—it&apos;s a tool that can be used wisely or unwisely. Set clear boundaries around screen time, choose age-appropriate content, and engage with your children about what they&apos;re watching or playing. Model healthy technology use yourself.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Building Spiritual Foundation</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Family Devotions</h3>
          <p>
            Regular family devotions don&apos;t have to be long or elaborate. Even five minutes of reading a Bible story, sharing prayer requests, or discussing how God worked in your day can build spiritual foundations. Make it age-appropriate and interactive.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Teaching Through Everyday Moments</h3>
          <p>
            Some of the most powerful spiritual lessons happen in everyday moments—helping a neighbor, showing kindness to a difficult person, or discussing why we make certain choices. Look for opportunities to connect daily experiences to biblical principles.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Encouraging Questions</h3>
          <p>
            Create a safe space for your children to ask questions about faith, life, and difficult topics. Don&apos;t be afraid to say &ldquo;I don&apos;t know&rdquo; or &ldquo;Let&apos;s explore that together.&rdquo; Questions are often signs of spiritual growth, not doubt.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">When Parenting Feels Overwhelming</h2>
          
          <p>
            Every parent feels overwhelmed sometimes. Parenting is hard work, and there&apos;s no such thing as a perfect parent. When you make mistakes (and you will), model repentance and forgiveness. Apologize to your children when necessary and show them how to make things right.
          </p>
          
          <div className="bg-divine-beige p-6 rounded-lg mt-8">
            <h3 className="text-lg font-semibold text-divine-blue mb-2">Self-Care for Parents</h3>
            <p className="text-gray-700">
              You can&apos;t pour from an empty cup. Taking care of your own physical, emotional, and spiritual needs isn&apos;t selfish—it&apos;s necessary. A healthy parent is better equipped to raise healthy children. Don&apos;t hesitate to seek support from other parents, your church community, or professional counselors when needed.
            </p>
          </div>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Parenting Different Ages and Stages</h2>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Early Childhood (Ages 2-6)</h3>
          <p>
            Focus on building trust, teaching basic obedience, and introducing simple spiritual concepts. Use stories, songs, and play to make learning fun. Consistency and routine are especially important at this age.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">School Age (Ages 7-12)</h3>
          <p>
            This is a time for developing responsibility, building character, and deepening spiritual understanding. Children this age can handle more complex discussions about faith and morality. Encourage their interests and help them develop their unique gifts.
          </p>
          
          <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-3">Teenagers (Ages 13-18)</h3>
          <p>
            Adolescence brings unique challenges as teens develop independence and form their own identity. Focus on relationship over rules, listen more than you lecture, and gradually increase their freedom as they demonstrate responsibility. This is when your investment in earlier years pays off.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-8 mb-4">The Long View of Parenting</h2>
          
          <p>
            Parenting is a marathon, not a sprint. There will be seasons of joy and seasons of challenge. Some days you&apos;ll feel like you&apos;re failing, and other days you&apos;ll see glimpses of the adults your children are becoming. Trust God&apos;s faithfulness in the process.
          </p>
          
          <div className="bg-divine-light-blue p-6 rounded-lg mt-8">
            <h3 className="text-lg font-semibold text-divine-blue mb-2">God&apos;s Promise to Parents</h3>
            <p className="text-gray-700">
              &ldquo;As for me and my household, we will serve the Lord&rdquo; (Joshua 24:15). When we commit to raising our children in the fear and admonition of the Lord, we can trust that God will honor our efforts. He loves our children even more than we do and is working in their lives even when we can&apos;t see it.
            </p>
          </div>
        </div>
      ),
      author: "Divine Healing Therapy",
      date: "February 15, 2024",
      category: "Family",
      readTime: "9 min read",
      image: "/blog/blogPic0.jpg"
    }
  ];
  return blogPosts.find(post => post.id.toString() === id);
};

export default async function BlogPost({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = getBlogPost(id);

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-divine-white via-divine-beige to-divine-light-blue flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900">Blog post not found</h1>
          <Link href="/blog" className="text-divine-blue hover:underline mt-4 inline-block">
            ← Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-divine-white via-divine-beige to-divine-light-blue">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <article className="bg-divine-white rounded-lg shadow-lg p-8">
          <div className="mb-6">
            <Link href="/blog" className="text-divine-blue hover:underline">
              ← Back to Blog
            </Link>
          </div>
          
          <div className="h-64 relative rounded-lg overflow-hidden mb-8">
            <Image
              src={post.image}
              alt={post.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
            />
          </div>
          
          <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
            <span className="inline-block px-3 py-1 bg-divine-beige text-divine-blue text-xs font-semibold rounded-full">
              {post.category}
            </span>
            <span>{post.readTime}</span>
          </div>

          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {post.title}
          </h1>
          
          <div className="flex items-center text-gray-500 mb-8">
            <p>By {post.author}</p>
            <span className="mx-2">•</span>
            <p>{post.date}</p>
          </div>

          <div className="prose lg:prose-xl max-w-none text-gray-700">
            {typeof post.content === 'string' ? <p>{post.content}</p> : post.content}
          </div>
        </article>

        <div className="mt-16 text-center">
          <div className="bg-divine-white p-8 rounded-lg shadow-lg max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Discuss this with a Professional
            </h2>
            <p className="text-gray-700 mb-6">
              If this post resonates with you, consider booking a session to explore these topics further in a supportive, faith-based environment.
            </p>
            <Link href="/schedule" className="bg-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 transition-colors">
              Book a Session
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 