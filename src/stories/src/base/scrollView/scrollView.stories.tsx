import { Meta, Story } from "@storybook/react/types-6-0";
import { ScrollView, ScrollViewProps, Text, View } from "reactjs-view";
import { StoryContainer } from "../../container";

export default {
  title: "ScrollView",
  component: ScrollView,
} as Meta<ScrollViewProps>;

const children = (
  <View style={{ width: 500 }}>
    <Text theme="regular" lang="fa" style={{ textAlign: "justify" }}>
      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از
      طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان
      که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با
      هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته
      حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم افزارها
      شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ
      پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام و
      دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد
      نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای
      موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید
      سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
      متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
      فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی
      می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
      جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
      رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد،
      در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
      شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
      اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
      قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
      استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
      سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
      متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
      درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
      افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و
      فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام
      و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان
      مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای
      موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید
      سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
      متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
      فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی
      می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
      جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
      رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد،
      در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
      شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
      اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
      قرار گیرد.لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
      استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و
      سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای
      متنوع با هدف بهبود ابزارهای کاربردی می باشد، کتابهای زیادی در شصت و سه
      درصد گذشته حال و آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
      افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان خلاقی، و
      فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این صورت می توان امید داشت که تمام
      و دشواری موجود در ارائه راهکارها، و شرایط سخت تایپ به پایان رسد و زمان
      مورد نیاز شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل دنیای
      موجود طراحی اساسا مورد استفاده قرار گیرد.لورم ایپسوم متن ساختگی با تولید
      سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و
      متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط
      فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی
      می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
      جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را برای طراحان
      رایانه ای علی الخصوص طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد،
      در این صورت می توان امید داشت که تمام و دشواری موجود در ارائه راهکارها، و
      شرایط سخت تایپ به پایان رسد و زمان مورد نیاز شامل حروفچینی دستاوردهای
      اصلی، و جوابگوی سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده
      قرار گیرد.
    </Text>
  </View>
);

const Template: Story<ScrollViewProps> = (args) => (
  <StoryContainer>
    <ScrollView {...args} style={{ flex: 1, height: 400 }} />
  </StoryContainer>
);

export const Regular = Template.bind({});
Regular.args = {
  children,
};

const FlexTemplate: Story<ScrollViewProps> = (args) => (
  <StoryContainer>
    <View style={{ height: 400 }}>
      <View style={{ flex: 1 }}>
        <ScrollView {...args} style={{ flex: 1 }} />
      </View>
      <View style={{ flex: 1 }} />
    </View>
  </StoryContainer>
);

export const Flex = FlexTemplate.bind({});
Flex.args = {
  children,
};
