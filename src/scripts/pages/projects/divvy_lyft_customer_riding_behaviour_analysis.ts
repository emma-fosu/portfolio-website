import '../../../styles/pages/projects/divvy_lyft_customer_riding_analysis.css'
import '../../components/documentation-page';
import embed, { type EmbedOptions } from 'vega-embed';

const opt: EmbedOptions = {actions: false}
embed('#member_casual_duration', `${import.meta.env.BASE_URL}member_casual_duration.json`, opt )
embed('#member_casual_count', `${import.meta.env.BASE_URL}member_casual_count.json`, opt);
embed('#member_casual_by_month', `${import.meta.env.BASE_URL}member_casual_by_month.json`, opt)
embed('#member_count_weekday', `${import.meta.env.BASE_URL}member_count_weekday.json`, opt);
embed('#casual_count_weekday', `${import.meta.env.BASE_URL}casual_count_weekday.json`, opt)
embed('#member_casual_week_and_hour_count', `${import.meta.env.BASE_URL}member_casual_week_and_hour_count.json`, opt);